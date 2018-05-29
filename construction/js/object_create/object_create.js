let person = Object.create({
    name: "cg",
    age: 23,
    greeting: function () {
        console.log(" I\'m " + this.name);
    }
});

//cg
console.info(person.name);

//I'm cg
person.greeting();