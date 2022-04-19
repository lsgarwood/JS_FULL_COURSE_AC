// comparison operators

console.log("Comparison Operators");
console.log(10 == 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 != 10);
console.log(10 != 11);

console.log("Logical Operators");
console.log(10 == 10 && 20 == 20 && 100 == 100);
console.log(10 == 10 && 20 != 20);
console.log(10 == 10 || 20 == 20);
console.log(20 == 30 || 20 == 20);
console.log(!(10 == 10));
console.log(!(10 == 20));

//use them within if statements
if (!(10 == 20)) {
    console.log("if statement was executed");
}