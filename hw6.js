Data = new Date();
let loger = console.log;
console.log = function () {
    arguments[0] = Data + " " + "|" + " " + arguments[0];
    loger.apply(console, arguments);
}
console.log("hello");