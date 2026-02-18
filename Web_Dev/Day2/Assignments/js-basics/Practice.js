const input = { name: "Alice", age: 25 };
let output = "";

for (let key in input) {
    output += key + "=" + input[key] + "&";
}

output = output.slice(0, -1);
console.log(output);