var blocked = false;

try {
    var win = window.open("http://www.baidu.com", "_blank");
    if (win == null) {
        blocked = true;
    }
} catch (e) {
    blocked = false;
}

if (blocked) {
    alert("the popup was blocked");
}