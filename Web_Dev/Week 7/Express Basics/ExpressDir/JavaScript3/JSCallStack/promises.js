// Promises........ -> The Promise object represents the eventual  of an asynchronous 
// operation and its resulting value.

// const savetoDb = (data, success, failure) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }

// }

const success = () => {
    console.log("success: your data was saved.");
    savetoDb("hello world",
        () => {
            console.log("success2: data2 saved");
            savetoDb("sujeet",
                () => {
                    console.log("success3: data3 saved");
                },
                () => {
                    console.log("failure3: weak connection");
                }
            );
        },
        () => {
            console.log("failure2: weak connection");
        });
}

const failure = () => {
    console.log("failure: weak connection. data not saved");
}

// Using async...
function savetoDb(data, success, failure) {
    return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    })
}

savetoDb("Sujeet Oraon", success, failure);