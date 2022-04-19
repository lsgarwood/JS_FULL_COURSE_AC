//  imports must be before the logic, at the evry top

// import all *
import * as Math from "./Named_Export"; //doesnt like this * syntax
//import specific
import {add, divide, PI} from "./Named_Export";
//import default
import Animal from "./Named_Export";

//all
console.log(Math.add(2,3));
console.log(Math.subtract(2,2));
console.log(Math.divide(4,2));
console.log(Math.multiply(2,3));
console.log(Math.PI);
//specific
console.log(add(2,3));
console.log(divide(4,2));
console.log(PI);

//default
var animal = new Animal();
console.log(animal.getClassType());

// **** something not working here!