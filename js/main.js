const notesContaner = document.querySelector(".notesContaner");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContaner.innerHTML = localStorage.getItem("notes") || "";
  addListenersToNotes();
}

function updateStorage() {
  localStorage.setItem("notes", notesContaner.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";

  inputBox.appendChild(img);
  notesContaner.appendChild(inputBox);

  inputBox.addEventListener("keyup", updateStorage);
  img.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    updateStorage();
  });

  updateStorage();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

function addListenersToNotes() {
  let notes = document.querySelectorAll(".input-box");
  notes.forEach((nt) => {
    nt.addEventListener("keyup", updateStorage);
  });

  let deleteBtns = document.querySelectorAll(".input-box img");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      updateStorage();
    });
  });
}
showNotes();
