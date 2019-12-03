const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

// Customize yargs version
// yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding the note");
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing the note");
  }
});

yargs.command({
  command: "list",
  describe: "Lists your notes",
  handler: () => {
    console.log("Listing your notes");
  }
});

yargs.command({
  command: "read",
  describe: "Reads your note",
  handler: () => {
    console.log("Reading your note");
  }
});

console.log(yargs.argv);

// add, remomve, read, list
