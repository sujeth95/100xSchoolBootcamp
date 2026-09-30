// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.

function callbackify(fn) {
    return (...args) => {
        const callback = args.pop();

        fn(...args)
            .then((data) => {
                callback(null, data)
            })
            .catch((err) => {
                callback(err);
            })
    }
}


// Problem Description – delay(ms, value, callback)
//
// You are required to write a function named delay that takes a time duration
// in milliseconds, a value, and a callback function.
// The function should wait for the given time and then invoke the callback
// with `null` as the first argument and the provided value as the second argument.

function delay(ms, value, callback) {
    setTimeout(() => {
        callback(null, value)
    }, ms)
}


// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

function fetchWithTimeout(url, ms, callback) {
    // If flag is false means that the timer is still running and if true means that the timer have stopped.
    let flag = false;

    let timerId = setTimeout(() => {
        if (!flag) {
            flag = true;
            callback(new Error("Request Timed Out"))
        }
    }, ms)

    fetch(url, (err, data) => {
        if (flag) {
            return;
        }
        flag = true;
        clearTimeout(timerId);
        callback(err, data);
    })
}