const APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42";
let city = document.querySelector("#city").value;
let lat, lon;

// variables for html elements
var weatherEl = document.getElementById("weather");
var fiveDayforecast1El = document.getElementById("fivedayforecast1");
var fiveDayforecast2El = document.getElementById("fivedayforecast2");
var fiveDayforecast3El = document.getElementById("fivedayforecast3");
var fiveDayforecast4El = document.getElementById("fivedayforecast4");
var fiveDayforecast5El = document.getElementById("fivedayforecast5");
var favoritesEl = document.getElementById("favorites");
var weathercontainerEl = document.getElementsByClassName("weathercontainer");
var clearhistorybtn = document.querySelector("#clearhistorybtn");
var clearfavoritesbtn = document.querySelector("#clearfavoritesbtn");
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

