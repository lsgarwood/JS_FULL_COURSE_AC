// Arrays and Spread Operators

/* 
Spread Operators allows us to expand an expression where argument, elements or variables are expected
We could use it to concatinate multiple arrays, hold arguments to functions in arrays or simply transform a string to an array
*/

//concatinate arrays
const arrayOne = ["Marian", "Anna", "Alex"];
const arrayTwo = ["Saeed", "Ismail", "Aisha"];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(names) {
    console.log(names);
});

//concatinate string
const name1 = "Marian";
const nameToArray = [...name1];
nameToArray.forEach(function(letter) {
    console.log(letter);
});

//
const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
}
const numbers = [1,5,9]
// without spread
const addition = addNumbers(numbers[0], numbers[1], numbers[2]);
console.log(addition);
//with
const addition1 = addNumbers(...numbers);
console.log(addition1);