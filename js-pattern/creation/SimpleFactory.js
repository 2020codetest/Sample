var Basketball = function() {
    this.intro = '篮球'
}

Basketball.prototype = {
    getMember : function() {
        console.log(`${this.intro}需要5个人`)
    },
    getBallSize: function() {
        console.log(`${this.intro}很大`)
    }
}

var Football = function() {
    this.intro = '足球'
}

Football.prototype = {
    getMember: function() {
        console.log(`${this.intro}需要11个人`)
    },
    getBallSize: function() {
        console.log(`${this.intro}很大`)
    }
}

var SportsFactory = function(name) {
    switch(name) {
        case 'NBA':
            return new Basketball()
        case 'wordCup':
            return new Football()
    }
}

var football = SportsFactory('wordCup')
football.getMember()