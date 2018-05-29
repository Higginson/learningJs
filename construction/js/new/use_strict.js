function Fubar(foo, arr) {
    'use strict';
    //严格模式下，函数内部this不能指向全局变量，默认为undefined，undefined的属性会报错
    this._foo = foo;
    this._arr = arr;

}

//会报错，Fubar是一个函数，this无对象，严格模式下默认为undefined
Fubar();


//不会报错，这时候Fubar是一个对象,this指向该对象
new Fubar();