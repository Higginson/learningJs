function Fubar(arr, foo) {
    if (!(this instanceof Fubar)) {
        return new Fubar();
    }

    this._arr = arr;
    this._foo = foo;
}

//undefined
console.log(Fubar(1,2)._foo);

//2
console.log((new Fubar(1,2))._foo);