// Arrays

// variables simply a box with a value in
var name= "Alex";

//arrays allow you you to store lots of values in a box
var names = ["Alex", "Maria", "Sam", "Emma"];
console.log(names);
//keep datatype in array the same

// stored in positions (indexes)[0,1,2,3,etc]

console.log(names[2]);
console.log(names.length);

//loop through array
for (var n of names) {
    console.log(n);
}

//loop through array 2
names.forEach(function(n,index) {
    console.log(index + " - " + n);
});



