function prototypeExtend() {
    var F = function() {},
    args = arguments,
    i = 0,
    len = args.length;
    for (; i < len; ++i) {
        for (var j in args[i]) {
            F.prototype[j] = args[i][j]
        }
    }

    return new F()
}

var penguin = prototypeExtend({
    speed: 20,
    swim: function() {
        console.log(`游泳速度${this.speed}`)
    }
})

penguin.swim()