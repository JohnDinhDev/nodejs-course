const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

// Customize yargs version
// yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "The body of your note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: argv => {
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

yargs.parse();
// add, remomve, read, list
