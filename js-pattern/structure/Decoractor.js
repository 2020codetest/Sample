var decorator = function(id, fn) {
    var node = document.getElementsByTagName(id)
    if (typeof node.onclick === 'function') {
        var oldClick = node.onclick
        node.onclick = function() {
            oldClick()
            fn()
        }
    } else {
        node.onclick = fn
    }
}