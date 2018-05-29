function f() {
    console.log(new.target === f);

    if (!new.target) {
        throw new Error("请使用 new 命令调用");
    }
}

//true
new f();

//false
f();

