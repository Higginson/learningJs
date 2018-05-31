var a = {};
var b = {x : 2};

Object.setPrototypeOf(a, b);

//a必须是对象，否则报错
console.log(Object.getPrototypeOf(a) === b);

console.log(Object.getPrototypeOf(a));
console.log(a.x);


/****************/
console.log('****************');



var F = function() {
    this.foo = 'bar';
};

var f = new F();
console.log(Object.getPrototypeOf(f));


/****************/
console.log('****************');


var v = Object.setPrototypeOf({}, F.prototype);
F.call(v);
console.log(Object.getPrototypeOf(v));