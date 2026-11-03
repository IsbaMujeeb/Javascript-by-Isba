console.log("JavaScript is working!");
let jokeBtn = document.getElementById("jokeBtn");
let loading = document.getElementById("loading");
let joke = document.getElementById("joke");
let error = document.getElementById("error");

jokeBtn.addEventListener("click", async function() {

    loading.innerText = "Loading...";
     joke.innerText = "";
    error.innerText = "";
    try{
    let API_URL = "https://v2.jokeapi.dev/joke/Any?type=single";
    let response= await fetch(API_URL);
    if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
    let data= await response.json();
    joke.innerText = data.joke;
    loading.innerText = "";}
    catch (error) {
        error.innerText = "Failed to fetch joke. Please try again.";
        loading.innerText = "";
    }


});