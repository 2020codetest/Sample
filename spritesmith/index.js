const { createCanvas, loadImage } = require('canvas')
const fs = require("fs")
const inW = 20
const inH = 20
class VNode{
    constructor(img, name) {
        this.img = img
        this.width = this.img.width + inW
        this.height = this.img.height + inH
        this.name = name
    }
}

class Block {
    constructor(width, height, img, name, splitted){
        this.width = width
        this.height = height
        this.img = img
        this.name = name
        this.x = 0
        this.y = 0
        this.right = null
        this.bottom = null
        this.splitted = splitted
    }
}
async function run(pendingImages, output, css) {
    async function parseImage(fileName){
        return new Promise((resolve, reject) => {
            loadImage(fileName).then((image) => {
                resolve(new VNode(image, fileName.substr(0, fileName.length - 4)))
            })
            .catch(() => {
                resolve(new VNode(null))
            })
        })
    }

    var pendingTasks = []
    for (var inx = 0; inx < pendingImages.length; ++inx){
        pendingTasks.push(parseImage(pendingImages[inx]))
    }

    await Promise.all(pendingTasks)
    var imageList = []
    for (var inx = 0; inx < pendingTasks.length; ++inx){
        imageList.push(await pendingTasks[inx])
    }

    imageList.sort((a, b) => {
        if (a.width > b.width) {
            return -1;
        }
        else if (a.width == b.width){
            return a.height > b.height ? -1: 1;
        }

        return 1;
    })

    function searchBlock(block, width, height){
        if (!block){
            return undefined
        }

        if (block.splitted){
            var ret = searchBlock(block.bottom, width, height)
            if (ret) {
                return ret
            }
            else {
                return searchBlock(block.right, width, height)
            }
        }
        else{
            if (block.width >= width && block.height >= height){
                return block;
            }

            return undefined
        }
    }
    
    function layout(imageList){
        var vnode = imageList[0]
        var root = new Block(vnode.width, vnode.height, vnode.img, vnode.name, true)
        for (var inx = 1; inx < imageList.length; ++inx){
            var vnode = imageList[inx]
            // 查找块
            var block = searchBlock(root, vnode.width, vnode.height)
            if (block){
                block.splitted = true
                block.img = vnode.img
                block.name = vnode.name
                if (block.width > vnode.width){
                    block.right = new Block(block.width - vnode.width, vnode.height, null,  null, false)
                    block.right.x = block.x + vnode.width
                    block.right.y = block.y
                }
 
                if (block.height > vnode.height){
                    block.bottom = new Block(block.width, block.height - vnode.height, null, null, false)
                    block.bottom.x = block.x
                    block.bottom.y = block.y + vnode.height
                }
            }
            else{
                // 根据现在的宽高比例来确定向右还是想向下扩展
                // 目标是将图片尽量合并成方形
                if (root.width > root.height){
                    // 向下扩展
                    var newBlock = new Block(root.width, vnode.height, vnode.img, vnode.name, true)
                    newBlock.x = 0
                    newBlock.y = root.height
                    if (root.width > vnode.width){
                        newBlock.right = new Block(root.width - vnode.width, vnode.height, null, null, false)
                        newBlock.right.y = root.height
                        newBlock.right.x = vnode.width
                    }

                    var newRoot = new Block(root.width, vnode.height + root.height, null, null, true)
                    newRoot.bottom = root
                    newRoot.right = newBlock
                    root = newRoot
                }
                else{
                    // 向右扩展
                    var newBlock = new Block(vnode.width, root.height, vnode.img, vnode.name, true)
                    newBlock.x = root.width
                    newBlock.y = 0
                    if (root.height > vnode.height){
                        newBlock.bottom = new Block(vnode.width, root.height - vnode.height, null, null, false)
                        newBlock.bottom.y = vnode.height
                        newBlock.bottom.x = root.width
                    }

                    var newRoot = new Block(root.width + vnode.width, root.height, null, null, true)
                    newRoot.bottom = root
                    newRoot.right = newBlock
                    root = newRoot                    
                }
            }
            
        }

        return root;
    }

    function mergeImages(root, context){
        if (root.img){
            context.drawImage(root.img, root.x, root.y, root.img.width, root.img.height)
        }

        if (root.bottom){
            mergeImages(root.bottom, context)
        }

        if (root.right){
            mergeImages(root.right, context)
        }
    }

    function generateCss(root, width, height, output){
        var str = ""
        if (root.img){
            str = str + `.${root.name}{background-image:url(./${output});background-position:${root.x}px ${root.y}px;width:${root.img.width}px;height:${root.img.height}px;background-size:${width}px ${height}px;}`
        }

        if (root.bottom){
            var ret = generateCss(root.bottom, width, height, output)
            if (ret){
                str = str + ret;
            }
        }

        if (root.right){
            var ret = generateCss(root.right, width, height, output)
            if (ret){
                str = str + ret;
            }
        }

        return str;
    }

    var root = layout(imageList)
    var style = generateCss(root, root.width - inW, root.height - inH, output)
    fs.writeFileSync(css, style)
    const canvas = createCanvas(root.width - inW, root.height - inH)
    const ctx = canvas.getContext('2d')
    mergeImages(root, ctx)
    fs.writeFileSync(output, canvas.toBuffer("image/png", {compressionLevel: 3}))
}

var output = "output.png"
var css = "output.css"
var pendingImages = []
var files = fs.readdirSync(".")
for (var inx = 0; inx < files.length; ++inx){
    if (files[inx].endsWith(".png") && files[inx] != output){
        pendingImages.push(files[inx])
    }    
}

setTimeout(async () => { await run(pendingImages, output, css);}, 0)