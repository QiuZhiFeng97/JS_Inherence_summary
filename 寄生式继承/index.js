//使用了原型式继承

function createAnother(original){
    var clone = Object.create(original);
    clone.sayHi = function(){
        alert('hi');
    };
    return clone;
}