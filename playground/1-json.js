const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const book = JSON.parse(fs.readFileSync("./1-json.json"));

// console.log(book.title);

let data = JSON.parse(fs.readFileSync("./1-json.json"));

data.name = "John";
data.age = 22;

data = JSON.stringify(data);

fs.writeFileSync("./1-json.json", data);
