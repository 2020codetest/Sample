function changeColor(node, color, bg) {
    node.style.color = color
    node.style.background = bg
}

input.onmouseover = function() {
    changeColor(this, 'red', '#ddd')
}

input.onmouseout = function() {
    changeColor(this, 'green', '#fff')
}