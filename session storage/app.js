let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let welcome = document.getElementById("welcome");
let clearBtn = document.getElementById("clearBtn");

saveBtn.addEventListener("click", function() {
    let name= nameInput.value;
    sessionStorage.setItem("name", name);
    if (name.trim() === "") {
        welcome.textContent = "Please enter your name.";
        return;
    }
    welcome.textContent = "Welcome, " + name + "!";


});

let saveName = sessionStorage.getItem("name");
if (saveName) {
    welcome.textContent = "Welcome, " + saveName + "!";
}

clearBtn.addEventListener("click", function() {

    sessionStorage.removeItem("name");

    welcome.textContent = "";

    nameInput.value = "";

});



clearBtn.addEventListener("click", function() {

    sessionStorage.removeItem("name");

    welcome.textContent = "";

    nameInput.value = "";

});