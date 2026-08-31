const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const notesContainer = document.getElementById("notesContainer");

// Get notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];


// Display notes
function displayNotes() {

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {

        const div = document.createElement("div");

        div.className = "note";

        div.innerHTML = `
            <span>${note}</span>
            <button class="delete" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        notesContainer.appendChild(div);
    });
}


// Add note
addBtn.addEventListener("click", function () {

    const note = noteInput.value.trim();

    if (note === "") {
        alert("Write something first!");
        return;
    }

    notes.push(note);

    // Save to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";

    displayNotes();
});


// Delete note
function deleteNote(index) {

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}


// Clear all notes
clearBtn.addEventListener("click", function () {

    notes = [];

    localStorage.removeItem("notes");

    displayNotes();
});


// Load notes when page starts
displayNotes();