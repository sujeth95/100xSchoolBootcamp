// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    (...args) => {
        let flag = false;
        const callback = args[args.length - 1];
        const argsWithoutCallback = args.slice(0, -1);
        fn()
    }
}

module.exports = once;
