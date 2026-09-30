function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Not a good way to write chained promises.
// setTimeoutPromisified(1000).then(() => {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(() => {
//         console.log("hello");
//         setTimeoutPromisified(5000).then(() => {
//             console.log("Hello2")
//         })
//     })
// })


// Efficient way of writing chained promises.
setTimeoutPromisified(1000)
    .then(() => {
        console.log('hi');
        return setTimeoutPromisified(3000);
    }).then(() => {
        console.log('hello');
        return setTimeoutPromisified(5000);
    }).then(() => {
        console.log('hello2');
    })