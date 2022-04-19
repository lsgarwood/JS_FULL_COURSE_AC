// Callback is a function iside another function being callback at some point

function callbackEx(name, callback) {
    console.log(callback(name));
}

//1
var callBack = function(name) {
    return "Hola " + name;
}

callbackEx("Abel Mohammed", callBack);

//2
callbackEx("Abel Mohammed", fucntion(name) {
    return "Hello " + name;
});

// Didnt work this one out fully......