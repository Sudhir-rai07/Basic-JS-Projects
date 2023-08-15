const input = document.querySelector("#note-input");
let count = 0; // key of Storage value
function addNote() {

    // note element 
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = `<p style="margin: 0;">${input.value}</p> <i class="trash fa-solid fa-trash"></i>`;
  document.querySelector("#note-container").appendChild(note);

  // Function to delete note
  function dlt_note() {
    note.remove();
  }
  //Event Listener
  note.querySelector(".trash").addEventListener("click", dlt_note);

  input.value = "" // Setting value to null
}

document.querySelector(".add-note").addEventListener("click", addNote);

// Clear all notes
function clearAll(){
    document.querySelector("#note-container").innerHTML = ""
}
document.querySelector("#clear-all").addEventListener('click', clearAll)