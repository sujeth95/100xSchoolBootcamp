const reverseString = (str) => {
  let result = "";
  let char = str.toString();

  for (let i = char.length-1; i >= 0; i--) {
    
    result += char[i];
  }
  return result;
}

console.log(reverseString("This is Sujeet"));