function _new(/*构造函数*/constructor, /*构造函数参数*/params) {

    //将arguments转化为数组
    let args = [].slice.call(arguments);
    console.log(args);

    //取出构造函数
    constructor = args.shift();
    console.log(constructor);

    //创建空对象，继承构造函数的prototype属性
    let context = Object.create(constructor.prototype);
    console.log(context);

    //执行构造函数
    let result = constructor.apply(context, args);
    console.log(result);

    //如果返回的值是对象，就直接返回，否则返回context对象
    return (typeof(result) === 'object' && result != null ? result : context);


}

_new(Person, 'cg', 28);

function Person() {
    this.name = 'chen';
}