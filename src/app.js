const createBtn = document.querySelector(".create");
const notes = document.querySelector(".notes");

const app = {
  init() {
    this.addEventListeners();
  },

  createElement(element, content) {
    const newElement = document.createElement(element);
    newElement.innerHTML = content;
    return newElement;
  },
  getInputValue() {
    const value = notes.value;
    return value;
  },
  addNoteToNotes() {
    const value = this.getInputValue();
    const newNote = this.createElement("p", value);
    notes.appendChild(newNote);
  },
  addEventListeners() {
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        this.addNoteToNotes();
      });
    }
  },
};

app.init();
