var a = {};
var b = {x : 2};

Object.setPrototypeOf(a, b);

//a必须是对象，否则报错
console.log(Object.getPrototypeOf(a) === b);

console.log(Object.getPrototypeOf(a));
console.log(a.x);