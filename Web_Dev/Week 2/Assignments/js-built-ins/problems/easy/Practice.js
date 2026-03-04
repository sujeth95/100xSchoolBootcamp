const fibonacci = (num) => {
  if (num <= 0) {
    return [];
  }
  if (num == 1) {
    return [0];
  }

  let result = [0, 1];

  for (let i = 2; i <= num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

const fibonacciRecursive = (num) => {
  if (num <= 0)
    return 0;

  if (num == 1) {
    return 1;

  }
  return fibonacciRecursive(num - 1) + (num - 2);
}



console.log(fibonacci(10),fibonacciRecursive(10));