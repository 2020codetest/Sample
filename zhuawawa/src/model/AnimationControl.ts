import * as PIXI from "pixi.js"
import Vue from "vue"

export class AnimationControl{
    private instance:Vue;
    private app: PIXI.Application;
    private loader: PIXI.Loader;
    private canvasId: string = "canvas"
    private imgHead: PIXI.Sprite = new PIXI.Sprite()
    private imgPawCatch: PIXI.Sprite = new PIXI.Sprite()
    private imgPawRelease: PIXI.Sprite = new PIXI.Sprite()
    private catchedBaby: PIXI.Sprite|undefined = undefined
    private babies: PIXI.Sprite[] = []
    private babiesTaken: boolean[] = []
    private inter: number = 0
    private babyWidth: number = 0
    private catching: boolean = false
    private uplimit: number = -80
    private downlimit: number = 40
    private switchPaw: number = -10
    private ratio: number = 0
    private movingDown: boolean = false
    constructor(instance: Vue){
        this.instance = instance;
        this.app = new PIXI.Application({ 
            width: window.innerWidth, 
            height: window.innerWidth * 1100 / 697,       
            transparent: true, 
            resolution: 1
        });

        this.app.view.id = this.canvasId
        this.instance.$el.insertBefore(this.app.view, this.instance.$el.childNodes[0])
        this.loader = new PIXI.Loader();
        this.loader.add("baby_0.png")
        .add("baby_1.png")
        .add("baby_2.png")
        .add("p2_claw_0.png")
        .add("p2_claw_1.png")
        .add("p2_top.png")
        .add("p2_wood_1.png")
        .add("p2_woodhead.png")
        .add("bg.png")
        .add("start.png")
        .load(() => {this.setup()});
    }

    setup() {
        var resource = this.loader.resources["p2_top.png"]
        var img = new PIXI.Sprite(resource.texture);
        this.ratio = this.app.view.width / img.width
    
        // 背景
        var resourceBg = this.loader.resources["bg.png"]
        var imgBg = new PIXI.Sprite(resourceBg.texture)
        imgBg.width = this.app.view.width
        imgBg.height = this.app.view.height
        imgBg.x = 0
        imgBg.y = 0
        this.app.stage.addChild(imgBg)
    
        // 移动杆
        var resourceHead = this.loader.resources["p2_wood_1.png"]
        var imgHead = new PIXI.Sprite(resourceHead.texture)
        imgHead.width = imgHead.width * this.ratio
        imgHead.height = imgHead.height * this.ratio
        imgHead.y = this.uplimit
        imgHead.x = (this.app.view.width - imgHead.width) / 2
        this.app.stage.addChild(imgHead)
        this.imgHead = imgHead
    
        //爪子
        // 抓住
        var resourcdPawCatch = this.loader.resources["p2_claw_0.png"]
        var imgPawCatch = new PIXI.Sprite(resourcdPawCatch.texture)
        imgPawCatch.width = imgPawCatch.width * this.ratio
        imgPawCatch.height = imgPawCatch.height * this.ratio
        imgPawCatch.x = (this.app.view.width - imgPawCatch.width) / 2
        imgPawCatch.y = imgHead.height + imgHead.y
        this.app.stage.addChild(imgPawCatch)
        this.imgPawCatch = imgPawCatch
    
        // 没抓住
        var resourcdPawRelease = this.loader.resources["p2_claw_1.png"]
        var imgPawRelease = new PIXI.Sprite(resourcdPawRelease.texture)
        imgPawRelease.width = imgPawRelease.width * this.ratio
        imgPawRelease.height = imgPawRelease.height * this.ratio
        imgPawRelease.x = (this.app.view.width - imgPawRelease.width) / 2
        imgPawRelease.y = imgHead.height + imgHead.y
        imgPawRelease.visible = false
        this.app.stage.addChild(imgPawRelease)
        this.imgPawRelease = imgPawRelease
    
        //移动娃娃
        var resourceBaby = this.loader.resources["baby_0.png"]
        var imgBaby = new PIXI.Sprite(resourceBaby.texture)
        imgBaby.width = imgBaby.width * this.ratio
        imgBaby.height = imgBaby.height * this.ratio
        this.inter = (this.app.view.width - imgBaby.width * 3) / 2
        this.babyWidth = imgBaby.width
        imgBaby.x = 0
        imgBaby.y = (829 - 267) * this.ratio
        this.app.stage.addChild(imgBaby)
        this.babies.push(imgBaby)
        this.babiesTaken.push(false)
    
        resourceBaby = this.loader.resources["baby_1.png"]
        imgBaby = new PIXI.Sprite(resourceBaby.texture)
        imgBaby.width = imgBaby.width * this.ratio
        imgBaby.height = imgBaby.height * this.ratio
        imgBaby.x = this.babyWidth + this.inter + (this.babyWidth - imgBaby.width) / 2
        imgBaby.y = (829 - 267) * this.ratio
        this.app.stage.addChild(imgBaby)
        this.babies.push(imgBaby)
        this.babiesTaken.push(false)
    
        resourceBaby = this.loader.resources["baby_2.png"]
        imgBaby = new PIXI.Sprite(resourceBaby.texture)
        imgBaby.width = imgBaby.width * this.ratio
        imgBaby.height = imgBaby.height * this.ratio
        imgBaby.x = (this.babyWidth+ this.inter) * 2 + (this.babyWidth - imgBaby.width) / 2
        imgBaby.y = (829 - 267) * this.ratio
        this.app.stage.addChild(imgBaby)
        this.babies.push(imgBaby)
        this.babiesTaken.push(false)
    
        resourceBaby = this.loader.resources["baby_0.png"]
        imgBaby = new PIXI.Sprite(resourceBaby.texture)
        imgBaby.width = imgBaby.width * this.ratio
        imgBaby.height = imgBaby.height * this.ratio
        imgBaby.x = (this.babyWidth + this.inter) * 3 + (this.babyWidth - imgBaby.width) / 2
        imgBaby.y = (829 - 267) * this.ratio
        this.app.stage.addChild(imgBaby)
        this.babies.push(imgBaby)
        this.babiesTaken.push(false)
    
        resourceBaby = this.loader.resources["baby_1.png"]
        imgBaby = new PIXI.Sprite(resourceBaby.texture)
        imgBaby.width = imgBaby.width * this.ratio
        imgBaby.height = imgBaby.height * this.ratio
        imgBaby.x = (this.babyWidth + this.inter) * 4 + (this.babyWidth - imgBaby.width) / 2
        imgBaby.y = (829 - 267) * this.ratio
        this.app.stage.addChild(imgBaby)
        this.babies.push(imgBaby)
        this.babiesTaken.push(false)
    
        resourceBaby = this.loader.resources["baby_2.png"]
        imgBaby = new PIXI.Sprite(resourceBaby.texture)
        imgBaby.width = imgBaby.width * this.ratio
        imgBaby.height = imgBaby.height * this.ratio
        imgBaby.x = (this.babyWidth + this.inter) * 5 + (this.babyWidth - imgBaby.width) / 2
        imgBaby.y = (829 - 267) * this.ratio
        this.app.stage.addChild(imgBaby)
        this.babies.push(imgBaby)
        this.babiesTaken.push(false)
    
        // 背景图
        img.width = this.app.view.width
        img.height = this.app.view.height
        this.app.stage.addChild(img)
     
        // 顶部固定
        resource = this.loader.resources["p2_woodhead.png"]
        img = new PIXI.Sprite(resource.texture)
        img.width = img.width * this.ratio
        img.height = img.height * this.ratio
        img.x = (this.app.view.width - img.width) / 2
        img.y = 140 * this.ratio
        this.app.stage.addChild(img)
        this.app.ticker.add((delta) => this.gameLoop(delta))
    }  

    start() {
        this.catching = true
        this.movingDown = true
        this.reset()
    }

    catch() {
        for (var inx = 0; inx < this.babies.length; ++inx){
            if (Math.abs(this.babies[inx].y - this.imgPawCatch.y) < 100 
            && Math.abs((this.babies[inx].x + this.babies[inx].width / 2) - (this.imgPawCatch.x + this.imgPawCatch.width / 2)) < 100 ) {
                this.babiesTaken[inx] = true
                this.catchedBaby = this.babies[inx]
                break;
            }
        }
    }

    reset() {
        this.catchedBaby = undefined
        for(var inx = 0; inx < this.babiesTaken.length; ++inx){
            this.babiesTaken[inx] = false
            this.babies[inx].y = (829 - 267) * this.ratio
            this.babies[inx].x = (this.babyWidth + this.inter) * inx +  (this.babyWidth - this.babies[inx].width) / 2
        }

        this.imgPawCatch.visible = true
        this.imgPawRelease.visible = false
        this.imgHead.y = this.uplimit
    }

    gameLoop(...args: any[]){
        for (var inx = 0; inx < this.babies.length; ++inx){
            if (!this.babiesTaken[inx]){
                this.babies[inx].x = this.babies[inx].x + 1
                if (this.babies[inx].x >= (this.babyWidth + this.inter) * 5 + this.inter + (this.babyWidth - this.babies[inx].width) / 2){
                    this.babies[inx].x = -this.babyWidth  + (this.babyWidth - this.babies[inx].width) / 2
                }
            }
        }

        if (this.catching){
            if (this.movingDown){
                this.imgHead.y = this.imgHead.y + 1
                if (this.imgHead.y >= this.downlimit){
                    // 开始抓娃娃
                    this.imgPawRelease.visible = false
                    this.imgPawCatch.visible = true
                    this.imgPawCatch.y = this.imgHead.height + this.imgHead.y
                    this.imgPawRelease.y = this.imgHead.height + this.imgHead.y
                    this.movingDown = false
                }
                else if (this.imgHead.y >= this.switchPaw){
                    // 开始展开爪子
                    this.imgPawRelease.visible = true
                    this.imgPawCatch.visible = false
                    this.imgPawCatch.y = this.imgHead.height + this.imgHead.y
                    this.imgPawRelease.y = this.imgHead.height + this.imgHead.y
                }
                else{
                    this.imgPawCatch.y = this.imgHead.height + this.imgHead.y
                    this.imgPawRelease.y = this.imgHead.height + this.imgHead.y
                }
            }
            else {
                this.imgHead.y = this.imgHead.y - 1
                if (this.imgHead.y >= this.uplimit){
                    this.imgPawCatch.y = this.imgHead.height + this.imgHead.y
                    this.imgPawRelease.y = this.imgHead.height + this.imgHead.y
                    this.movingDown = false
                    if (this.catchedBaby){
                        this.catchedBaby.y = this.imgPawCatch.y + this.imgPawCatch.height - 20
                        this.catchedBaby.x = this.imgPawCatch.x - (this.catchedBaby.width - this.imgPawCatch.width) / 2
                    }
                }
                else{
                    this.imgPawRelease.visible = false
                    this.imgPawCatch.visible = true
                    this.catching = false;
                    (<any>this.instance).stop.call(this.instance)
                }
            }
        }
    }
}