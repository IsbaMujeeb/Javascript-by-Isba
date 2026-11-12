let historyText = document.getElementById("history");

let backBtn = document.getElementById("back-btn");
let forwardBtn = document.getElementById("for-btn");
let goBtn = document.getElementById("go-btn");
let reloadBtn = document.getElementById("reload-btn");

let historyLength= history.length;
historyText.innerText = "History Length: " + historyLength;
backBtn.addEventListener("click", function() {
    history.back();
});


forwardBtn.addEventListener("click", function() {
    history.forward();
});


goBtn.addEventListener("click", function() {
    history.go(-2);
});


reloadBtn.addEventListener("click", function() {
    history.go(0);
});