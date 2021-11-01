"use strict"
const helper = {
    isObject(obj) {
        return(typeof obj === 'object' && obj !== null)
    },
    isEmpty(obj) {
        if (!this.isObject(obj)) {
            console.log("WRONG TYPE!!!")
            return;
        }
        return(Object.getOwnPropertyNames(obj).length === 0);
    },
    deepClone(obj) {
        if (!this.isObject(obj)) {
            console.log("WRONG TYPE!!!")
            return;
        }
        const clone = {};
        for (let keys in obj) {
            if (typeof obj[keys] === 'object') {
                clone[keys] = this.deepClone(obj[keys]);
            } else {
                clone[keys] = obj[keys];
            }
        }
        return clone;
        // clone = JSON.parse(JSON.stringify(obj));
    },
    isEqual(obj1, obj2) {
        if (!this.isObject(obj1)) {
            console.log("WRONG TYPE!!!")
            return;
        }
        if (!this.isObject(obj2)) {
            console.log("WRONG TYPE!!!")
            return;
        }
        const prop1 = Object.getOwnPropertyNames(obj1);
        const prop2 = Object.getOwnPropertyNames(obj2);
        let prop = "";
        if (prop1.length != prop2.length)
            return false;
        for (let i = 0; i < prop1.length; i++) {
            prop = prop1[i];
            if (typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object') {
                if (!this.isEqual(obj1[prop], obj2[prop]))
                    return false;
            } else {
                if (obj1[prop] != obj2[prop])
                    return false;
            }
        }
        return true;
    },
    findValue(obj, key) {
        if (!this.isObject(obj)) {
            console.log("WRONG TYPE!!!")
            return;
        }
        const prop1 = Object.getOwnPropertyNames(obj);
        let prop = "";
        let value = "";
        for (let i = 0; i < prop1.length; i++) {
            prop = prop1[i];
            if (typeof obj[prop] == 'object') {
                value = this.findValue(obj[prop], key);
                if (value && value !== "Значение не найдено")
                    return value;
            } else {
                if (prop === key)
                    return obj[prop];
            }
        }
        let alert = "Значение не найдено";
        return alert;
    },
    hasKey(obj, key) {
        if (!this.isObject(obj)) {
            console.log("WRONG TYPE!!!")
            return;
        }
        const prop1 = Object.getOwnPropertyNames(obj);
        let prop = "";
        for (let i = 0; i < prop1.length; i++) {
            prop = prop1[i];
            if (typeof obj[prop] == 'object') {
                if (this.hasKey(obj[prop], key))
                    return true;
            } else {
                if (prop === key)
                    return true;
            }
        }
        return false;
    },
};
Object.defineProperties(helper, {
    isObject : {configurable: false, writable: false},
    isEmpty : {configurable: false, writable: false},
    deepClone : {configurable: false, writable: false},
    isEqual : {configurable: false, writable: false},
    findValue : {configurable: false, writable: false},
    hasKey : {configurable: false, writable: false}
});
const obj1 = {property: "value"};
const obj2 = {
    property: "value",
    nextLevel: {
        secondProperty: "secondValue",
        thirdLevel: {
            thirdProperty: "thirdValue"
        }
    }
};
const obj3 = {};
const obj4 = "привет";
const obj5 = {
    property: "value",
    nextLevel: {
        secondProperty: "secondValue",
        thirdLevel: {
            thirdProperty: "thirdValue1"
        }
    }
};

const isObject = helper.isObject(obj1);
//console.log(isObject);

const isEmpty = helper.isEmpty(obj1);
//console.log(isEmpty);

const deepClone = helper.deepClone(obj2);
//console.log(deepClone);

const isEqual = helper.isEqual(obj2, obj5);
//console.log(isEqual);

const findValue = helper.findValue(obj2, "thirdProperty");
//console.log(findValue);

const hasKey = helper.hasKey(obj2, "thirdProperty");
//console.log(hasKey);