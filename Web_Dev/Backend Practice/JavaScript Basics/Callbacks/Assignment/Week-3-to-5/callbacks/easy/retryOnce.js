// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) {

  return function(...args) {
    // In callback patterns, the callback is always the last argument
    const callback = args[args.length - 1]; 
    const argsWithoutCallback = args.slice(0, -1); 

    // 1. Make the first attempt
    fn(...argsWithoutCallback, (error, result) => {
      
      if (error) {
        // 2. The first attempt failed. 
        // We retry exactly once by calling fn again, this time passing the original callback.
        // If this second attempt fails, it will automatically pass the error to the callback.
        fn(...argsWithoutCallback, callback);
      } else {
        // 3. The first attempt succeeded. 
        // We pass the successful result back to the original callback.
        callback(null, result);
      }
      
    });
  };
}

module.exports = retryOnce;