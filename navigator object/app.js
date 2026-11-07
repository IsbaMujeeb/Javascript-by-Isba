let browserDiv = document.getElementById("browser");
let statusDiv = document.getElementById("status");
let languageDiv = document.getElementById("language");
let checkBtn = document.getElementById("checkBtn");
let cookiesDiv = document.getElementById("cookies");

checkBtn.addEventListener("click", function() {
    let browserInfo = navigator.userAgent;
let isOnline = navigator.onLine;
let language = navigator.language;
let cookiesEnabled = navigator.cookieEnabled;

    browserDiv.textContent = browserInfo;
    statusDiv.textContent = isOnline ? "Online" : "Offline";
    languageDiv.textContent = language;
    cookiesDiv.textContent = cookiesEnabled ? "Enabled" : "Disabled";
})