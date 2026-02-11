function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Such as callback hell , promises also have promise hell.
setTimeoutPromisified(1000).then(() => {
    console.log("hii");
    setTimeoutPromisified(2000).then(() => {
        console.log("hii 2");
        setTimeoutPromisified(3000).then(() => {
            console.log("hii 3");
        })
    })
})

// better way of writing promises to avoid promise hell.
setTimeoutPromisified(1000).then(() => {
    console.log("hii");
    return setTimeoutPromisified(2000);
}).then(() => {
    console.log("hii 2");
    return setTimeoutPromisified(3000);
}).then(() => {
    console.log("hii 3");
})