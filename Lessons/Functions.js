// a function is a task allowing you to return a value

var addition = 2 + 2;
console.log(addition);

//kind of useless if you wnat to change the calculation and log each value or each time

//easier to put it into a function
function addNumbers(num1, num2) {// start of function body
    //define logic
    console.log(num1 + num2);
}// end of function body

addNumbers(10, 12); //invoke or call function

//or you can use a variable within a function instead of logging the reult you can just return it and log it after
function multNumbers(n1, n2) {
    var result = n1 + n2;
    return result;
}
var result = multNumbers(2, 3);
console.log(result);