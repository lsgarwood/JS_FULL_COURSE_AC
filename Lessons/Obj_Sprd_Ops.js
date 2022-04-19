// Objects and Spread Operators

const address = {
    city: "LA",
    country: "USA",
    postcode: "LA44"
};

const names = {
    firstName: "Andy",
    lastName: "Jones"
};

//without spread operator
const person = {
    city: address.city,
    country: address.country,
    postcode: address.postcode,
    firstName: names.firstName,
    lastName: names.lastNames
}

//with S.O
const person1 = {...address, ...names};
console.log(JSON.stringify(person1, null, 2));