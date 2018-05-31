function getLocationSearch() {
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),

        args = {},

        items = qs.length > 0 ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,

        len = items.length;

    for (let i = 0; i < len; i++) {
        item = items[i].split("=");
        name = decodeURI(item[0]);
        value = decodeURI(item[1]);

        if (name.length) {
            args[name] = value;
        }
    }

    return args;


}


var args = getLocationSearch();
console.log(args);