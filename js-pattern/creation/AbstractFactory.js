var Car = function() {
    this.type = 'car'
}
Car.prototype = {
    getPrice: function() {
        return new Error('未实现')
    },
    getSpeed: function() {
        return new Error('未实现')
    }
}

var Bus = function() {
    this.type = 'bus'
}
Bus.prototype = {
    getPrice: function() {
        return new Error('未实现')
    },
    getSpeed: function() {
        return new Error('未实现')
    }
}


var Truck = function() {
    this.type = 'truck'
}
Truck.prototype = {
    getPrice: function() {
        return new Error('未实现')
    },
    getSpeed: function() {
        return new Error('未实现')
    }
}

var VehicleFactory = function(subType, superType) {
    if (typeof VehicleFactory.prototype[superType] === 'function') {
        function F() {}
        F.prototype = new VehicleFactory.prototype[superType]()
        subType.constructor = subType
        subType.prototype = new F()
    }
    else{
        throw new Error('不存在')
    }
}

VehicleFactory.prototype = {
    Car: Car,
    Bus: Bus,
    Truck: Truck
}

var BMW = function(price, speed) {
    this.price = price
    this.speed = speed
}

VehicleFactory(BMW, 'Car')
BMW.prototype = {
    getPrice: function() {
        console.log(`BMW price is ${this.price}`)
    },
    getSpeed: function() {
        console.log(`BMW speed is ${this.speed}`)
    }
}

var bmw = new BMW(1000, 10)
bmw.getPrice()
bmw.getSpeed()