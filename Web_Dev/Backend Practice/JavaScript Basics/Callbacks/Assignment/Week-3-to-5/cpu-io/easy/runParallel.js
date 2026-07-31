// Problem Description – Parallel Execution of Async Functions
//
// You are given an array of asynchronous functions. Your task is to execute
// all of them at the same time (in parallel).
//
// The function should return a promise that resolves to an array of
// resolved values in the same order as the input functions.
//
// If any of the asynchronous functions reject, the returned promise
// should immediately reject with that error.

async function runParallel(functions) {
    return new Promise((resolve, reject) => {
        const resultsArray = [];
        let completedCount = 0;

        // If array is empty resolve immediately.
        if (functions.length === 0) {
            resolve(resultsArray);
            return;
        }

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((data) => {
                    resultsArray[i] = data;

                    completedCount++;
                    // check if all the tasks are complete or not.
                    if (completedCount === functions.length) {
                        resolve(resultsArray);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        }
    })
}

module.exports = runParallel;
