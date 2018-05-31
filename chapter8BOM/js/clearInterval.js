var num = 0;
var max = 10;
var intervalId = null;

intervalId = setInterval(function() {
    num++;
    console.log(intervalId);
    if (num === max) {
        clearInterval(intervalId);
        alert('Done');
    }
}, 1000);