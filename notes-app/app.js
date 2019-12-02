const validator = require("validator");
const notes = require("./notes");

console.log(notes.getNotes());

console.log(validator.isURL("https/soul-sword.netlify.com"));
