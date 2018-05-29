function Fubar() {
    this.price = 1000;
    return 2000;
}

function Message() {
    return "this is a string, not Object";
}

//构造函数里return一个非对象值将会无效，仍然返回该构造函数，
console.log(new Fubar());
console.log(typeof(new Message()));

/*******************/

function Fubar1() {
    this.price = 1000;
    return {price: 2000};
}
//构造函数里return一个对象，则返回该对象
console.log((new Fubar1()));


