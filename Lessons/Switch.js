//Switch

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

//we can do the same as above but with a switch
//using the age...
switch(person.age) {
    case 17:
        console.log(person.name + " is about to be an adult");
        break;
    case 18:
        console.log(person.name + " is and adult");
        break;
    default:
        console.log("We dont know");
}

//or using true
switch(true) {
    case (person.age == 17):
        console.log(person.name + " is about to be an adult");
        break;
    case (peron.age >= 18):
        console.log(person.name + " is and adult");
        break;
    default:
        console.log("is not an adult");
}

switch (new Date().getDay()) {
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("I dont know");
}