var CanvasCommand = (function() {
    var canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    var Action = {
        fillStyle: function(c) {
            ctx.fillStyle = c
        },
        fillRect: function(x, y, width, height) {
            ctx.fillRect(x, y, width, height)
        },
        strokeStyle: function(c) {
            ctx.strokeStyle = c
        },
        strokeRect: function(x, y, width, height) {
            ctx.strokeRect(x, y, width, height)
        },
        fillText: function(text, x, y) {
            ctx.fillText(text, x, y)
        }
    }

    return {
        excute: function(cmds) {
            if (!cmds) {
                return
            }

            if (cmds.length) {
                for (var i = 0, len = cmds.length; i < len; ++i) {
                    arguments.callee(cmds[i])
                }
            } else {
                cmds.param = Object.prototype.toString.call(cmds.param) === "[Object Array]" ? cmds.param: [cmds.param];
                Action[cmds.command].apply(Action, cmds.param)
            }
        }
    }
})()

CanvasCommand.excute([
    {commmand: 'fillStyle', param: 'red'},
    {command: 'fillRect', param: [20, 20, 100, 100]}
])