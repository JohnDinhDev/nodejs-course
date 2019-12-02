const fs = require("fs");

fs.writeFileSync("./notes.txt", "Hello");

fs.appendFileSync("./notes.txt", "\nWorld");
