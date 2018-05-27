//结合原型链继承和构造函数继承的优点,是ECMAScript最常用的继承方式

function SuperType(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function(){
    alert(this.name);
}

function SubType(name, age){
    //构造继承
    SuperType.call(this, name);
    this.age = age;
}

//重写prototype
SubType.prototype = new SuperType();

//重写constructor属性
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};


var instance1 = new SubType('Nicholas', 29);
instance1.colors.push('black');
alert(instance1.colors); //'red,blue,green,black'
instance1.sayName(); //Nicholas
instance1.sayAge(); // 29

var instance2 = new SubType('Greg', 27);
alert(instance2.colors); //'red,blue,green'
instance2.sayName(); //Greg
instance2.sayAge(); //27
