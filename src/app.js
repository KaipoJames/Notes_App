const createBtn = document.querySelector(".create");
const input = document.querySelector("#input");
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
    const value = input.value;
    console.log("input Value: " + value);
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
        console.log("clicked!");
        this.addNoteToNotes();
      });
    }
  },
};

app.init();
