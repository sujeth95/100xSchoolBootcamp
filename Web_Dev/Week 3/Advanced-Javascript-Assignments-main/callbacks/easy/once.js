// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
	let started = false;
	let finished = false;
	let cachedError = null;
	let cachedResult;
	let waitingCallbacks = [];

	return function (...args) {
		const callback = args[args.length - 1];

		if (finished) {
			callback(cachedError, cachedResult);
			return;
		}

		waitingCallbacks.push(callback);

		if (started) {
			return;
		}

		started = true;

		const finalCallback = (err, result) => {
			if (finished) {
				return;
			}

			finished = true;
			cachedError = err || null;
			cachedResult = result;

			const callbacksToRun = waitingCallbacks;
			waitingCallbacks = [];

			for (const cb of callbacksToRun) {
				cb(cachedError, cachedResult);
			}
		};

		fn(...args.slice(0, -1), finalCallback);
	};
}

module.exports = once;
