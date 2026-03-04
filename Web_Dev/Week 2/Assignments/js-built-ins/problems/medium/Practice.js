const countOccurences = (arr) => {
    let result = {};

    for (let key of arr) {
        result[key] = (result[key] || 0) + 1;
    }

    return result;
}

console.log(countOccurences([10, 20, 10, 30, 20, 20]));