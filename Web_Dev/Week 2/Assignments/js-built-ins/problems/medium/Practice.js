const findDuplicate = (arr) => {
    let result = [];

    // iterating through each index
    for (let i = 0; i < arr.length; i++) {
        let alreadyCount = false;

        // Avoiding same number in result.
        for (let k = 0; k < result.length; k++) {
            if (result[k] == arr[i]) {
                alreadyCount = true;
                break;
            }
        }

        if (alreadyCount) {
            continue;
        }
        // checking duplication in original array.
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                result.push(arr[i]);
            }
        }
    }
    return result;
}

console.log(findDuplicate([10, 20, 30, 10, 40]));