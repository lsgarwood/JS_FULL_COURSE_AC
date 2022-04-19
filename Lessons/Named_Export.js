// create your exports
export var add = function(n1, n2) {
    return n1 + n2;
}

export var divide = function(n1, n2) {
    return n1 / n2;
}

export var subtract = function(n1, n2) {
    return n1 - n2;
}

export var multiply = function(n1, n2) {
    return n1 * n2;
}

export var PI = 3.145;

//defaul export 
//could be a object or value
export default class Animal{
    constructor() {
        console.log("I am an animal");
    }
    getClassType() {
        return "Animal";
    }
}