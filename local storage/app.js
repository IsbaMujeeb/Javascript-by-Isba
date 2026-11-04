let noteInput = document.getElementById("noteInput");
let saveBtn = document.getElementById("saveBtn");
let notesList = document.getElementById("notesList");

// 1. Purane notes localStorage se nikaalo
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// 2. Screen par note dikhane ka function
function showNoteOnScreen(noteText) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = noteText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);

    // Delete button ka kaam:
    deleteBtn.addEventListener("click", function() {
        // Yeh dhoondega ke list mein yeh note kis number par hai
        let index = Array.from(notesList.children).indexOf(li);

        // Array se nikalo
        notes.splice(index, 1);

        // LocalStorage update karo
        localStorage.setItem("notes", JSON.stringify(notes));

        // Screen se hatao
        li.remove();
    });
}

// 3. Jab page khule, saare purane notes screen par dikha do
notes.forEach(function(note) {
    showNoteOnScreen(note);
});

// 4. Jab "Save" button dabaayein:
saveBtn.addEventListener("click", function() {
    let note = noteInput.value.trim();

    if (note === "") {
        alert("Please write a note!");
        return;
    }

    // List mein naya note dikhao
    showNoteOnScreen(note);

    // Array mein daalo aur save karo
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Input box khaali karo
    noteInput.value = "";
});
