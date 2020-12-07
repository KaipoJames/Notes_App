const createBtn = document.querySelector(".create");
const deleteBtn = document.querySelector(".delete");
const input = document.querySelector("#input");
const notes = document.querySelector(".notes");
const localStorageContent = localStorage.getItem("names");

const icons = [];

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
    return value;
  },
  addIcons(note) {
    const pencil_image = document.createElement("img");
    const plus_image = document.createElement("img");
    const trash_image = document.createElement("img");
    pencil_image.src = "../icons/pencil-sign.png";
    plus_image.src = "../icons/plus-sign.png";
    trash_image.src = "../icons/trash-can-sign.png";
    pencil_image.classList.add("icon");
    plus_image.classList.add("icon");
    trash_image.classList.add("icon");
    note.appendChild(pencil_image);
    note.appendChild(plus_image);
    note.appendChild(trash_image);
  },
  createNewNote(inputValue) {
    const note = document.createElement("div");
    const noteText = this.createElement("p", inputValue);
    note.appendChild(noteText);
    note.classList.add("note");
    return note;
  },

  addNoteToNotes() {
    const inputValue = this.getInputValue();
    const note = this.createNewNote(inputValue);
    this.addIcons(note);

    notes.appendChild(note);

    //Store Note in data array
    data.push(note.children[0].innerHTML);
    console.log(data);
    localStorage.setItem("names", JSON.stringify(data));
  },
  addEventListeners() {
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        //console.log("clicked!");
        this.addNoteToNotes();
        //console.log(notes.childElementCount);
      });
    }
    if (input) {
      input.addEventListener("keyup", (event) => {
        if (event.keyCode == 13) {
          this.addNoteToNotes();
          console.log(notes.childElementCount);
        }
      });
    }
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        this.extractData();
      });
    }
  },
  extractData(index) {
    console.log(data);
    for (var el of data) {
      console.log("el: " + el);
      if (el == index) {
      }
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
    const note = app.createNewNote(data[i]);
    app.addIcons(note);
    notes.appendChild(note);
  }
}

app.init();
