var getSingle = (function() {
    var instance = null
    function Single() {
        return {
            value: 9
        }
    }
    return function(){
        if (!instance) {
            instance = Single()
        }

        return instance
    }
})()

var single = getSingle()
console.log(single.value)