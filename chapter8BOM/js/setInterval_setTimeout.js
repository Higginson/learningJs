var num = 0;
var max = 10;

function intervalNum() {
    num++;
    if (num < max) {
        setTimeout(intervalNum, 100);

    } else {
        alert("Done");
    }
}

setInterval(intervalNum, 1000);