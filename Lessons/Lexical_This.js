

const person = {
    name: "Alex",
    cars: ["Ferrari", "Lambo"],
    toString: function() {
    //console.log(`${this.name} has ${this.cars}`);
       // const that = this;
        this.cars.forEach(cars => {
            console.log(`${this.name} has ${this.cars}`);
        });//.bind(this))
    }
}

person.toString();
