// Problem Description – callbackify(fn)

// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


function callbackify(fn) {
    return function (...args) {
        const callback = args[args.length - 1];
        const params = args.slice(0, -1);

        if(typeof callback !== 'function'){
            throw new ("Last argument must be a callback function")
        }

        Promise.resolve()
            .then(() => fn(...params))
            .then((data) => callback(null,data))
            .catch((err) => callback(err))
    }
}

module.exports = callbackify;
