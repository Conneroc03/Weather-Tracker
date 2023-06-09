const APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42";
let city = document.querySelector("#city").value;
let lat, lon;

// variables for html elements
const weatherEl = document.getElementById("weather");
const fiveDayforecastEl = document.querySelectorAll(".fivedayforecast");
const favoritesEl = document.getElementById("favorites");
const weathercontainerEl = document.getElementsByClassName("weathercontainer")[0];
const clearhistorybtn = document.querySelector("#clearhistorybtn");
const clearfavoritesbtn = document.querySelector("#clearfavoritesbtn");
const getweatherbtn = document.querySelector("#getweatherbtn");

getCities();

fuction getCity(cityURL) {
    fetch(cityURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        getWeather(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`);\
    });

}

