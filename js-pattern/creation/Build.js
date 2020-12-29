var Human = function(param) {
    this.skill = param && param.skill || '保密'
    this.hobby = param && param.hobby || '保密'
}

Human.prototype = {
    getSkill: function () {
        console.log(`技能${this.skill}`)
    },
    getHobby: function () {
        console.log(`爱好${this.hobby}`)
    }
}

var Named = function(name) {
    var that = this;
    (function(name, that){
        that.wholeName = name
        if (name.indexOf(' ') > -1) {
            that.FirstName = name.slice(0, name.indexOf(' '))
            that.SecondName = name.slice(name.indexOf(' '))
        }
    })(name, that)
}

var Work = function(work) {
    var that = this;
    (function(work, that){
        switch(work) {
            case 'code':
                that.work = '工程师'
                that.workDesc = '变成'
                break
            case 'UI':
            case 'UE':
                that.work = '设计师'
                that.workDesc = '艺术'
                break
        }
    })(work, that)
}

Work.prototype.changeWork = function(work) {
    this.work = work
}

Work.prototype.changeDesc = function(desc) {
    this.workDesc = desc
}

var Person = function(name, work) {
    var _person = new Human()
    _person.name = new Named(name)
    _person.work = new Work(work)
    return _person
}

var person = new Person('xiao ming', 'code')
console.log(person.name.FirstName)
