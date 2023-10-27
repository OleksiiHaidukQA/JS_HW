/* Умова №1
Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. 
У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. 
Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконань. 
Нотатки не повинні бути порожніми.
*/ 
class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteText) {
        const trimmedText = noteText.trim();
        if (trimmedText) {
            const newNote = {
                text: trimmedText,
                completed: false,
            };
            this.notes.push(newNote);
        }
    }

    editNote(index, newText) {
        if (this.isValidIndex(index) && this.isNonEmpty(newText)) {
            this.notes[index].text = newText.trim();
        }
    }

    deleteNote(index) {
        if (this.isValidIndex(index)) {
            this.notes.splice(index, 1);
        }
    }

    toggleNote(index) {
        if (this.isValidIndex(index)) {
            this.notes[index].completed = !this.notes[index].completed;
        }
    }

    getNotes() {
        return this.notes;
    }

    getNoteInfo(index) {
        if (this.isValidIndex(index)) {
            const { text, completed } = this.notes[index];
            return { text, completed };
        }
    }

    getNotesCount() {
        return this.notes.length;
    }

    getIncompleteNotesCount() {
        return this.notes.filter((note) => !note.completed).length;
    }

    isValidIndex(index) {
        return index >= 0 && index < this.notes.length;
    }

    isNonEmpty(text) {
        return text.trim() !== '';
    }
}

const myTodoList = new TodoList();
myTodoList.addNote("Перша нотатка");
myTodoList.addNote("Друга нотатка");
myTodoList.addNote("Третя нотатка");

myTodoList.toggleNote(0);
myTodoList.editNote(1, "Змінена нотатка");
myTodoList.deleteNote(2);

console.log("Список нотаток:", myTodoList.getNotes());
console.log("Кількість нотаток:", myTodoList.getNotesCount());
console.log("Кількість невиконаних нотаток:", myTodoList.getIncompleteNotesCount());

/* Умова №2
Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).
*/
class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteText) {
        if (noteText.trim() !== "") {
            const newNote = {
                text: noteText,
                completed: false,
            };
            this.notes.push(newNote);
        }
    }

    editNote(index, newText) {
        if (index >= 0 && index < this.notes.length) {
            if (newText.trim() !== "") {
                this.notes[index].text = newText;
            }
        }
    }

    deleteNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
        }
    }

    toggleNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = !this.notes[index].completed;
        }
    }

    getNotes() {
        return this.notes;
    }

    getNoteInfo(index) {
        if (index >= 0 && index < this.notes.length) {
            return {
                text: this.notes[index].text,
                completed: this.notes[index].completed,
            };
        }
    }

    getNotesCount() {
        return this.notes.length;
    }

    getIncompleteNotesCount() {
        return this.notes.filter((note) => !note.completed).length;
    }

    searchNotesByName(name) {
        const trimmedName = name.trim();
        return this.notes.filter((note) => note.text.includes(trimmedName));
    }

    sortNotesByStatus() {
        this.notes.sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return 0;
        });
    }
}

const myTodoList = new TodoList();
myTodoList.addNote("Перша нотатка");
myTodoList.addNote("Друга нотатка");
myTodoList.addNote("Третя нотатка");

myTodoList.toggleNote(0);
myTodoList.editNote(1, "Змінена нотатка");
myTodoList.deleteNote(2);

console.log("Список нотаток:", myTodoList.getNotes());
console.log("Кількість нотаток:", myTodoList.getNotesCount());
console.log("Кількість невиконаних нотаток:", myTodoList.getIncompleteNotesCount());

const foundNotes = myTodoList.searchNotesByName("Друга");
console.log("Знайдені нотатки:", foundNotes);

myTodoList.sortNotesByStatus();
console.log("Відсортовані нотатки:", myTodoList.getNotes());

/* Умова №3
Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.
*/
class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteText) {
        if (noteText.trim() !== "") {
            const newNote = {
                text: noteText,
                completed: false,
                createdDate: new Date(), 
                editedDate: null,        
            };
            this.notes.push(newNote);
        }
    }

    editNote(index, newText) {
        if (index >= 0 && index < this.notes.length) {
            if (newText.trim() !== "") {
                this.notes[index].text = newText;
                this.notes[index].editedDate = new Date(); 
            }
        }
    }

    deleteNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
        }
    }

    toggleNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = !this.notes[index].completed;
        }
    }

    getNotes() {
        return this.notes;
    }

    getNoteInfo(index) {
        if (index >= 0 && index < this.notes.length) {
            return {
                text: this.notes[index].text,
                completed: this.notes[index].completed,
                createdDate: this.notes[index].createdDate,
                editedDate: this.notes[index].editedDate,
            };
        }
    }

    getNotesCount() {
        return this.notes.length;
    }

    getIncompleteNotesCount() {
        return this.notes.filter((note) => !note.completed).length;
    }

    sortNotesByCreationDate() {
        this.notes.sort((a, b) => a.createdDate - b.createdDate);
    }

    sortNotesByEditedDate() {
        this.notes.sort((a, b) => (a.editedDate || a.createdDate) - (b.editedDate || b.createdDate));
    }

    searchNotesByDate(startDate, endDate) {
        return this.notes.filter((note) => {
            const noteDate = note.editedDate || note.createdDate;
            return noteDate >= startDate && noteDate <= endDate;
        });
    }
}

const myTodoList = new TodoList();
myTodoList.addNote("Перша нотатка");
myTodoList.addNote("Друга нотатка");
myTodoList.addNote("Третя нотатка");

myTodoList.toggleNote(0);
myTodoList.editNote(1, "Змінена нотатка");

console.log("Список нотаток:", myTodoList.getNotes());
console.log("Кількість нотаток:", myTodoList.getNotesCount());
console.log("Кількість невиконаних нотаток:", myTodoList.getIncompleteNotesCount());

myTodoList.sortNotesByCreationDate();
console.log("Відсортовані за датою створення нотатки:", myTodoList.getNotes());

myTodoList.sortNotesByEditedDate();
console.log("Відсортовані за датою редагування нотатки:", myTodoList.getNotes());

const startDate = new Date('2023-10-01');
const endDate = new Date('2023-10-31');

const notesInOctober = myTodoList.searchNotesByDate(startDate, endDate);
console.log("Нотатки, створені в жовтні 2023 року:", notesInOctober);