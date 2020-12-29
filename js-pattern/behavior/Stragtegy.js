var PriceStrategy = function() {
    var stragtegy = {
        return30: function(price) {
            return price + parseInt(price / 100) * 30
        },
        return50: function(price) {
            return price + parseInt(price / 100) * 50
        }
    }

    return function(algorithm, price) {
        return stragtegy[algorithm] && stragtegy[algorithm](price)
    }
}