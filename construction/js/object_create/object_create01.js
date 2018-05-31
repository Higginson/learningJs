let B = {
    print: function () {
        console.log('hello');
    }
};

let A = Object.setPrototypeOf({}, B);

console.log(Object.getPrototypeOf(A));
console.log(Object.getPrototypeOf(B));