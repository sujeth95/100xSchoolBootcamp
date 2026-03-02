const reverseString = (str) => {
  let result = "";

  let string = str.toString();

  for (let i = string.length - 1; i >= 0; i--){
    result += string[i];
  }

  return result;
}

console.log(reverseString("sujeet"));