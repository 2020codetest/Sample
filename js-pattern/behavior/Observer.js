var Observer = (function() {
    var topics = {}
    return {
        register: function(type, fn) {
            if (typeof topics[type] === 'undefined') {
                topics[type] = [fn]
            }
            else {
                topics[type].push(fn)
            }
        },
        fire: function(type, args) {
            if (!topics[type]) {
                return
            }

            var event = {
                type: type,
                args: args || {}
            },
            i = 0,
            partitions = topics[type].length;
            for (; i < partitions; ++i) {
                topics[type][i].call(this, event)
            }
        },
        remove: function(type, fn) {
            if (topics[type] instanceof Array) {
                var len = topics[type].length -1
                for (; i >= 0; i--) {
                    topics[type][i] === fn && topics[type].splice(i, 1)
                }
            }
        }
    }
})()