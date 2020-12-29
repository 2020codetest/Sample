var Count = (function(){
    var _img = new Image()
    return function(param) {
        var str = 'http://www.cnt.com/a.gif?'
        for (var a in param) {
            str += i + '=' + param[i]
        }

        _img.src = str
    }
})()

function callback(result, err) {
}

var Jsonp = (function(){
    var head = document.head || document.getElementsByTagName('head')[0]
    return function(url, callbackfn){
        var script = document.createElement('script')
        script.src = url
        head.insertBefore(script, 0)
    }
})()

Count({num : 10})
Jsonp("https://www.a.com?q=abc", "callback")