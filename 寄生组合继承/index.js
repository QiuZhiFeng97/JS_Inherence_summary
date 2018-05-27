//组合继承无论什么情况下,都会调用两次超类型构造函数

/**
 * 这种方式高效在于只调用一次超类型构造函数,寄生组合继承是引用类型最理想的继承范式
 */


function inheritPrototype(SubType, SuperType){
    var prototype = Object.create(SuperType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function(){
    alert(this.name);
};

function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(subType, SuperType);

SubType.prototype.sayAge = function(){
    alert(this.age);
}

