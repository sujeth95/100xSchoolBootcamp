// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) {
    return function (...args) {
        const ans = args[args.length - 1];
        const finalArgs = args.slice(0, -1);

        function firstInternalHandler(err, data) {
            if(!err){
                return ans(null, data);
            }
            fn(...finalArgs, secondInternalHandler)
        }

        function secondInternalHandler(err, data){
            if(err){
                return ans(err,data);
            }
            return ans(null, data);
        }

        fn(...finalArgs, firstInternalHandler)
    };
}

module.exports = retryOnce;
