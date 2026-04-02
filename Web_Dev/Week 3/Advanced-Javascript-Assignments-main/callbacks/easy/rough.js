// return function (...args) {
//         const callback = args[args.length - 1];
//         const params = args.slice(0, -1);

//         if (typeof callback !== 'function') {
//             throw new TypeEr ror('Last argument must be a callback function');
//         }

//         Promise.resolve()
//             .then(() => fn(...params))
//             .then((data) => callback(null, data))
//             .catch((error) => callback(error));
//     };

// function successCallback(result) {
//     console.log(`Audio file ready at URL: ${result}`);
// }

// function failureCallback(error) {
//     console.error(`Error generating audio file: ${error}`);
// }

// createAudioFileSync(audioSettings).then(successCallback, failureCallback);

function fetchWithTimeout(url, ms, callback) {
    const data = fetch(url);
    
}
