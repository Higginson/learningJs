var o1 = {p1: 123};

var o2 = Object.create(o1, {
   p2: {value: 'abc', enumerable : true}
});

for (p in o2) {
    console.log(p);
}