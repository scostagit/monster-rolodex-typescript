/*
Promise
The Promise object represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value

States
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const myPromise = new Promise(function(resolve, reject) {

    //resolve => 200,201 OK
    //reject => 404,401,403,500 ect...
    
    if(true){
        setTimeout(() => {
            resolve('I have succeeded') //at this moment the promise is fulfilled: promise completed successfully
        }, 2000); //while the promise waits until the returns from the api, its state is peding.
    }else{
        reject('I have failed'); //at this moment the promise isrejected: promise completed failed
    }        
});

myPromise
    .then(value => value + ", yahoo")
    .then(anotherValue => anotherValue + "!!!")
    .then(finalValue=> console.log(finalValue)) //each then modifies the value to the next one.
    .catch(error => console.error(error));