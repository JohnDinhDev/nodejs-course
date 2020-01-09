const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	return "Your notes...";
};

const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({ title, body });
		saveNotes(notes);
		console.log(chalk.inverse.green("New note added!"));
	} else {
		console.log(chalk.inverse.red("Note title already exist!"));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => {
		return title !== note.title;
	});
	if (notes.length > notesToKeep.length) {
		console.log(chalk.inverse.green("Note Removed!"));
	} else {
		console.log(chalk.inverse.red("Note Not Found!"));
	}
	saveNotes(notesToKeep);
};

const listNotes = () => {
	const notes = loadNotes();
	notes.forEach((note) => {
		console.log(`${chalk.bgGreen.black("Title:")} ${note.title}`);
	});
};

const loadNotes = () => {
	try {
		return JSON.parse(fs.readFileSync("./notes.json"));
	} catch (e) {
		return [];
	}
};

const readNote = (title) => {
	const notes = loadNotes();
	const foundNote = notes.find((note) => note.title === title);
	if (foundNote) {
		console.log(
			`${chalk.bgMagenta.black(foundNote.title)}: ${foundNote.body}`
		);
	} else {
		console.log(chalk.bgRed.black("No note found!"));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("./notes.json", dataJSON);
};

module.exports = { addNote, removeNote, listNotes, readNote };
