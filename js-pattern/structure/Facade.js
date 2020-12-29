function addEvent(node, type, fn) {
    if (node.addEventListener) {
        node.addEventListener(type, fn, false)
    } else if (node.attachEvent) {
        node.attachEvent('on' + type, fn)
    } else{
        node['on' + type] = fn
    }
}