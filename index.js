// ## Learning Goals

// - Define "first-class function"
// - Use inline functions
// - Use functions as return values


//define function index
// arrow function that takes function as its parameter


// ANSWERS!

// function receivesAFunction(rFunction) {
//     rFunction();
// }
// function returnsANamedFunction(){
//     return function helloWorld () {
//         console.log("hello");
//     }
// }

// function returnsAnAnonymousFunction() {
//     return () => {};
// }


















function receivesAFunction(aFunction) {
    return aFunction();
}



function returnsANamedFunction() {
    return function fn(){};
}




function returnsAnAnonymousFunction() {
    return ()=> {};
}










