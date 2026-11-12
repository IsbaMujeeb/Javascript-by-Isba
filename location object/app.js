// Selecting HTML elements
let url = document.getElementById("url");
let hostname = document.getElementById("hostname");
let protocol = document.getElementById("protocol");
let pathname = document.getElementById("pathname");
let search = document.getElementById("search");
let hash = document.getElementById("hash");

// Selecting buttons
let reloadBtn = document.getElementById("reloadBtn");
let googleBtn = document.getElementById("googleBtn");
let replaceBtn = document.getElementById("replaceBtn");


// Getting information from location object
url.innerHTML = `<p class="info">Complete URL: ${location.href}</p>`;

hostname.innerHTML = `<p class="info">Hostname: ${location.hostname}</p>`;

protocol.innerHTML = `<p class="info">Protocol: ${location.protocol}</p>`;

pathname.innerHTML = `<p class="info">Pathname: ${location.pathname}</p>`;

search.innerHTML = `<p class="info">Search: ${location.search || "No search parameters"}</p>`;

hash.innerHTML = `<p class="info">Hash: ${location.hash || "No hash found"}</p>`;


// Reload button
reloadBtn.addEventListener("click", function() {
    location.reload();
});


// Assign button
googleBtn.addEventListener("click", function() {
    location.assign("https://www.google.com");
});


// Replace button
replaceBtn.addEventListener("click", function() {
    location.replace("https://www.wikipedia.org");
});