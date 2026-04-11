const callbackify = (fn) => {
    return function (...args) {
        const callback = args[args.length - 1];
        const params = args.slice(0, -1);

        if (typeof callback !== 'function') {
            throw new TypeError('Last argument must be a callback function')
        }

        Promise.resolve()
            .then(() => fn(...params))
            .then((data) => callback(null, data))
            .then((err) => callback(err))
    }
}

return function (...args) {
    const callback = args[args.length - 1];
    const params = args.slice(0, -1);

    if (typeof callback !== 'function') {
        throw new ('Last argument must be a callback function')
    }

    Promise.resolve()
        .then(() => fn(...params))
        .then((data) => callback(null, data))
        .catch((error) => callback(error))
}

const delay = (ms, value, callback) => {
    return setTimeout(() => {
        callback(null, value);
    }, ms);
}

const fetchWithTimeout = (URL, ms, callback) => {
    let flag = false;

    const timer = setTimeout(() => {
        if (flag) {
            return;
        }
        flag = true;
        callback('Request Time Out');
    }, ms)


    fetch(URL, (err, data) => {
        if (flag) {
            return;
        }
        flag = true;
        countTimer(timer);

        if (err) {
            callback(err);
            return;
        }

        callback(null, data);
    })
}

let settled = false;

const timer = setTimeout(() => {
    if (settled) {
        return;
    }
    settled = true;
    callback(new Error("Request Timed Out"));
}, ms);

fetch(url, (err, data) => {
    if (settled) {
        return;
    }
    settled = true;
    clearTimeout(timer);

    if (err) {
        callback(err);
        return;
    }

    callback(null, data);
});

const rejectAfter = (ms, callback) => {
    setTimeout(() => {
        callback(new Error('Error'));
    }, ms);
}

function retryOnce(fn) {
    return function (...args) {
        const ans = args[args.length - 1];
        const finalArgs = args.slice(0, -1);

        function firstInternalHandler(err, data) {
            if (!err) {
                return ans(null, data)
            }
            fn(...finalArgs, secondInternalHandler)
        }

        function secondInternalHandler(err, data) {
            if (!err) {
                return ans(err, data);
            }
            return ans(null, data);
        }

        fn(...finalArgs, firstInternalHandler)
    };
}


function sleep(millis, callback) {
    const timer = setTimeout(() => {
        callback();
    }, millis)

    return timer;
}


// PROMISES
function delayResult(value, ms) {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    })
}

const doubleTry = async (fn) => {
    try {
        return await fn()
    } catch(e){
        return await fn();
    }
}

return (...args) => Promise.resolve().then(() => fn(...args));


return fetchUser(userId)
			.then((user) => fetchPosts(user.id))
			.catch((e) => {
				console.error(e);
			});