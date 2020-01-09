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
	handler: ({ title, body }) => {
		notes.addNote(title, body);
	}
});

yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string"
		}
	},
	handler({ title }) {
		notes.removeNote(title);
	}
});

yargs.command({
	command: "list",
	describe: "Lists your notes",
	handler() {
		notes.listNotes();
	}
});

yargs.command({
	command: "read",
	describe: "Reads your note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string"
		}
	},
	handler({ title }) {
		notes.readNote(title);
	}
});

yargs.parse();
// add, remomve, read, list
