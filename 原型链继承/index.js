// 最容易想到的继承方式,通过创建父类实例,并将构造函数的原型指向该实例即可

/**
 *  缺点:
 *      1.原型链继承的最大的问题是,引用类型属性会被所有实例共享
 *      2.创建子类型实例时,不能向超类型的构造函数中传递参数
 */
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subProperty = false;
}
//实现继承,本质上重写了prototype属性指向的对象,因此子类的方法因在继承之后写
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subProperty;
};

var instance = new SubType();
alert(instance.getSuperValue()); //true