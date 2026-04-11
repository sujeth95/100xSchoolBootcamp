// Problem Description – ensureAsync(fn)

// You are required to write a function named ensureAsync that takes another function fn as input. 
// The goal is to guarantee that calling fn always returns a Promise, even if fn is synchronous.
// Using the async keyword is recommended, as it automatically wraps return values and errors in a Promise.
function ensureAsync(fn) {
    // OPTION 1:
    // return async(...args) => {
    //    return Promise.resolve().then(() => fn(...args));        //NOTE: use return to return Promise else undefined gets returned.
    // }

    // OPTION 2:
    return async (...args) => fn(...args);
}

module.exports = ensureAsync;
