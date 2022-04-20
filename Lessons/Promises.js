//Promises 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data back from server");
    }, 3000);

    setTimeout(() => {
        reject("No data back from the server, error");
    }, 5000);
    
});

promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

// Promise All
const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Anna", "Jack", "Ali", "Jake"]);
    }, 1000);

    setTimeout(() => {
        reject("No data back from the server, error");
    }, 3000);
    
});

const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Smith", "Jones", "Baba", "Williams"]);
    }, 1000);

    setTimeout(() => {
        reject("No data back from the server, error");
    }, 3000);
    
});

Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data;
    for (var i = 0; i < namesPromise.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        console.log(`${name} ${surname}`);
    }
}).catch(error => {
    console.log(error);
});