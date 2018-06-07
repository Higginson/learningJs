function inheritedPropertyName(obj) {
    let props = {};
    while(obj) {
        Object.getOwnPropertyNames(obj).forEach(function (p) {
            props[p] = true;
        });
        obj = Object.getPrototypeOf(obj);
    }
    return console.log(Object.getOwnPropertyNames(props));
}

inheritedPropertyName(Date);