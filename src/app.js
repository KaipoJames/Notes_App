const createBtn = document.querySelector(".create");
const input = document.querySelector("#input");
const notes = document.querySelector(".notes");
const localStorageContent = localStorage.getItem("names");

let data;

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
    //console.log("input Value: " + value);
    return value;
  },
  addNoteToNotes() {
    const value = this.getInputValue();
    const newNote = this.createElement("p", value);
    notes.appendChild(newNote);

    //Store Note in data array
    data.push(newNote.innerHTML);
    console.log(data);
    localStorage.setItem("names", JSON.stringify(data));
  },
  addEventListeners() {
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        //console.log("clicked!");
        this.addNoteToNotes();
        console.log(notes.childElementCount);
      });
    }
  },
};

if (localStorageContent == null) {
  data = [];
} else {
  //Get the data from local storage
  data = JSON.parse(localStorageContent);
  console.log(data);

  // Convert data back to HTML elements and add them back to the notes element.
  for (let i = 0; i < data.length; i++) {
    const el = app.createElement("p", data[i]);
    notes.appendChild(el);
  }
}

/* if (notes.childElementCount == 0) {
  data = [];
} */

/* if (storedString) {
  const noteString = app.createElement("p", storedString);
  console.log(noteString);
  notes.appendChild(noteString);
} */

/* for (var i = 0; i < notes.childElementCount; i++) {
  const retrievedNote = localStorage.getItem(notes[i]);
  const parsedNote = JSON.parse(retrievedNote);
  notes.appendChild(parsedNote);
} */

app.init();
