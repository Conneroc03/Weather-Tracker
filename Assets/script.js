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
var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIkey;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;
var getweatherbtn = document.querySelector("#getweatherbtn");

getCities();

// function to get lat and lon from city name
function getCity(cityURL) {
    fetch(cityURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        console.log(lat);
        console.log(lon);
        getWeather("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey)
    });
}


// function to get weather forcast data
function getWeather(queryURL) {
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      // created variables for city name/date/weather icon/temperature humidity/wind speed
        var cityname = data.city.name;
        var date = data.list[0].dt_txt; 
        date = date.split(" ");
        date = date[0];
        var weathericon = data.list[0].weather[0].icon;
        var temperature = data.list[0].main.temp;
        temperature = (temperature - 273.15) * 1.8 + 32;
        temperature = Math.round(temperature);
        var humidity = data.list[0].main.humidity;
        var windspeed = data.list[0].wind.speed;
        windspeed = Math.round(windspeed);
        console.log(data);
        console.log(cityname);
        console.log(date);
        console.log(weathericon);
        console.log(temperature);
        console.log(humidity);
        console.log(windspeed);
        searchedcity.textContent = cityname + " " + date;
        weatherEl.appendChild(searchedcity);
        var weathericonEl = document.createElement("img");
        weathericonEl.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon + ".png");
        weathericonEl.setAttribute("style", "width: 100px; height: 100px;")
        weatherEl.appendChild(weathericonEl);
        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = "Temperature: " + temperature + "°F";
        weatherEl.appendChild(temperatureEl);
        var humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity: " + humidity + "%";
        weatherEl.appendChild(humidityEl);
        var windspeedEl = document.createElement("p");
        windspeedEl.textContent = "Wind Speed: " + windspeed + " MPH";
        weatherEl.appendChild(windspeedEl);
        weatherEl.setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px; background-color: rgb(102, 193, 242); border-radius: 10px;");
