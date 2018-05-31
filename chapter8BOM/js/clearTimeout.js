var timeoutId = setTimeout(function() {
    alert('hello world');

}, 2000);

console.log(timeoutId);

clearTimeout(timeoutId);

console.log(window.timeout);