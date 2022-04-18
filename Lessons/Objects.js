// Objects

//an object with three properties instead of three variables
var person = {
    name: "Maria Jones",
    age: 21,
    hasDrivingLicence: true,
    // Nested object
    address: {
        firstLine: "123",
        postCode: "SE1",
        country: "England"
    }
};

// access all  info for object
console.log(person);
console.log(JSON.stringify(person));
//and nested
console.log(JSON.stringify(person.address));

//access individual properties/values
console.log(person.name);
console.log(person.age);
console.log(person.hasDrivingLicence);

// access all values or keys for one object
console.log(Object.values(person));
console.log(Object.keys(person));

//access properties for nested object
console.log(person.address.firstLine);
