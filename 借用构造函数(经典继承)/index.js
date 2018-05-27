//目的:解决原型中包含引用类型值所带来问题
//如何实现: 在子类型构造函数的内部调用超类型构造函数

/**
 * 优点:可以向超类型中传递参数,同时消除了引用类型产生的影响
 * 缺点:每个实例的方法都不共享,即构造函数产生的问题
 * 
 */
function SuperType(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

function SubType(name){
    SuperType.call(this,name);
    this.age = 29;
}

var instance1 = new SubType('Nicolas');
instance1.colors.push('black');
alert(instance1.name); //
alert(instance1.colors); //'red,blue,green,black'

var instance2 = new SubType();
alert(instance2.colors);  //'red,blue,gren'