let F = function () {

};

let f = new F();

console.log(Object.getPrototypeOf(f) === F.prototype);