// Equality without type coercion 


console.log(typeof 0 + " " + typeof false);
console.log(0 == false);

console.log(typeof "0" + " " + typeof false);
console.log("0" == false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 == "1");
// converting one type to another to make them 'equals'

// Use triple eqals === for equality WITHOUT coersion
console.log(typeof 0 + " " + typeof false);
console.log(0 === false);

console.log(typeof "0" + " " + typeof false);
console.log("0" === false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 === "1");

// not triple equals !== also

// better to use === to be more accurate
