var Factory = function(type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content)
        return s
    }
    else{
        return new Factory(type, content)
    }
}

var Java = function(content) {
    this.content = content
}

Java.prototype = {
    desc: function() {
        console.log(`Java is ${this.content}`)
    }
}

var Php = function(content) {
    this.content = content
}

Php.prototype = {
    desc: function() {
        console.log(`Php is ${this.content}`)
    }
}

Factory.prototype = {
    Java: Java,
    Php: Php
}

var language = Factory('Java', '静态语言')
language.desc()

language = Factory('Php', '最厉害的语言')
language.desc()