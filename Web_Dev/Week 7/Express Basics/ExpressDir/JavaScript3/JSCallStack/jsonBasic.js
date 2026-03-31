// Parsing json data to js object.
let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes);

// parsing js object to json data
let student = {
    name: "sujeet",
    marks: 95,
};
let parseStudent = JSON.stringify(student);
console.log(parseStudent);