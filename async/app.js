let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let loading = document.getElementById("loading");
let weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", function() {
     getWeather() ;
});
async function getWeather() {
    console.log("Getting weather data...");
  try{
    let city = cityInput.value.trim();
    if (city === "") {
    weatherResult.innerHTML = "Please enter a city";
    return;
}
    error.innerText = "";
        weatherResult.innerHTML = "";

        loading.innerText = "Loading...";
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    let response = await fetch(url);
    let data = await response.json();
    if(!data.results || data.results.length === 0){
        throw new Error("City not found");
    }
        let latitude = data.results[0].latitude;
    let longitude = data.results[0].longitude;
      let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
      let weatherResponse= await fetch(weatherURL);
      let weatherData = await weatherResponse.json();

      let temperature = weatherData.current.temperature_2m;

let humidity = weatherData.current.relative_humidity_2m;

let windSpeed = weatherData.current.wind_speed_10m;

weatherResult.innerHTML = `
    <h2>${city}</h2>
    <h1>${temperature}°C</h1>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} km/h</p>
`;
}  
catch(error){
    weatherResult.innerHTML = `<p>${error.message}</p>`;
}
 finally {

        loading.innerText = "";

    }
}