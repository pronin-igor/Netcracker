//-----первая часть-----//
console.log("UNIQUE");

function array_unique() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (result.indexOfNew(this[i]) === -1)
            result.push(this[i]);
    }
    return result;
}

function array_indexOf(obj) {
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        for (let i = 0; i < this.length; i++)
            if (typeof this[i] === 'object' && this[i] !== null && !Array.isArray(this[i]) && JSON.stringify(obj) === JSON.stringify(this[i]))
                return this[i];
        return -1;
    }

    for (let i = 0; i < this.length; i++)
        if (this[i] === obj)
            return obj;
    return -1;
}

Array.prototype.indexOfNew = array_indexOf;

Array.prototype.unique = array_unique;

const obj1 = {property: "value"};
const obj2 = {property: "value"};
const obj3 = {property: "value!"};
const obj4 = {property: "value!"};
var myArray = ['c', 'b', 'c', 2, 'b', obj1, obj2, obj3, obj4];
console.log("array:", myArray);
console.log("uniqueArray:", myArray.unique());

//-----вторая часть часть-----//
console.log("НАСЛЕДОВАНИЕ");

function inherit(ParentClass) {
    function ChildClass() {}
    ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
    ChildClass.prototype._super = ParentClass.prototype;
    return ChildClass;
}

function Rebbit() {}
Rebbit.prototype.eatRebbit = function () {
    this.eat = "grass";
}

let Wolf = inherit(Rebbit);
Wolf.prototype.eatWolf = function () {
    this._super.eatRebbit.call(this);
    this.eat2 = "rebbit";
}

let Human = inherit(Wolf);
Human.prototype.eatHuman = function () {
    this._super.eatWolf.call(this);
    this.eat3 = "wolf";
}

let human = new Human();
human.eatHuman();
console.log(human.eat);
console.log(human.eat2);
console.log(human.eat3);
