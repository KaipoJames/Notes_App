const createBtn = document.querySelector(".create");
const input = document.querySelector("#input");
const notes = document.querySelector(".notes");
const localStorageContent = localStorage.getItem("names");

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

let data;
if (localStorageContent == null) {
  data = [];
} else {
  //Get the data from local storage
  data = JSON.parse(localStorageContent);
  console.log(data);

  // Convert data back to HTML elements and add them back to the notes element.
  for (let i = 0; i < data.length; i++) {
    const htmlElement = app.createElement("p", data[i]);
    notes.appendChild(htmlElement);
  }
}

app.init();
