//If Statements
//Allows you to execute a block of code if a statement is true

var bool = true;

if (bool) {
    console.log("bool was true");
}

var person = {
    name : "Anna",
    age: 17
}

if(person.age >= 18) {
    console.log(person.name + " is and adult");
} else if (person.age == 17) {
    console.log(person.name + " is about to be an adult");
} else {
    console.log(person.name + " is not an adult");

}