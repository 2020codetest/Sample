var News = function() {
    this.children  = []
    this.element = null
}

News.prototype = {
    init: function() {
        throw new Error("not defined")
    },
    add: function() {
        throw new Error("not defined")
    },
    getElement: function() {
        throw new Error("not defined")
    }
}

var ImageNews = function(url, href, classname) {
    News.call(this)
    this.url = url || ''
    this.href = href || ''
    this.classname = classname || 'normal'
}