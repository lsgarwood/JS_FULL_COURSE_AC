// Constant
// Cannot reassign variable

const name = "Maria";
console.log(name); 

const person = {};

person["name"] = "Maria";
console.log(person.name);

const array = [];
array.push("Maria from array");
console.log(array[0]);

// start with const, more secure
// if you need to change to let you can after