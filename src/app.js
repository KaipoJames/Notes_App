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
  createIcon(fileName, parent_div) {
    const img = document.createElement("img");
    img.classList.add("icon");
    img.src = "../icons/" + fileName + ".png";
    parent_div.appendChild(img);
  },
  addIcons(note) {
    const img_div = document.createElement("div");
    img_div.classList.add("icons");
    this.createIcon("pencil-sign", img_div);
    this.createIcon("plus-sign", img_div);
    this.createIcon("trash-can-sign", img_div);
    note.appendChild(img_div);
  },
  createNewNote(inputValue) {
    const note = document.createElement("div");
    const noteText = this.createElement("p", inputValue);
    note.appendChild(noteText);
    this.addIcons(note);
    this.implementDeleteFunction(note);
    note.classList.add("note");
    return note;
  },
  addNoteToNotes() {
    const inputValue = this.getInputValue();
    const note = this.createNewNote(inputValue);
    notes.appendChild(note);

    //Store Note in data array
    data.push(note.children[0].innerHTML);
    console.log(data);
    localStorage.setItem("names", JSON.stringify(data));
  },
  implementDeleteFunction(note) {
    const icon_div = note.children[1];
    const delete_icon = icon_div.children[2];
    const data = note.children[0].innerHTML;
    delete_icon.addEventListener("click", () => {
      note.parentNode.removeChild(note);
      var getNotes = JSON.parse(localStorageContent);
      getNotes.splice(data,1);
      localStorage.setItem("names", JSON.stringify(getNotes));
    });
  },


// <-------- EVENT LISTENERS -------->
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
    notes.appendChild(note);
  }
}

app.init();
