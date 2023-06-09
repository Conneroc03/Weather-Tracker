var APIkey = "3f09255387b8321273840e778202a2e2"
var city = document.querySelector("#city").value;
var lat, lon;
// declared variables for my elements
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

// local storage for the favorites
getCities();

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
        // using lat and lon to get weather data
        getWeather("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey)
    });
}

function getWeather(queryURL) {
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
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
        var searchedcity = document.createElement("h2");
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
        
        // day 1 of 5 day forecast
        var date1 = data.list[7].dt_txt;
        date1 = date1.split(" ");
        date1 = date1[0];
        var weathericon1 = data.list[7].weather[0].icon;
        var temperature1 = data.list[7].main.temp;
        temperature1 = (temperature1 - 273.15) * 1.8 + 32;
        temperature1 = Math.round(temperature1);
        var humidity1 = data.list[7].main.humidity;
        var windspeed1 = data.list[7].wind.speed;
        windspeed1 = Math.round(windspeed1);
        var date1El = document.createElement("h3");
        date1El.textContent = date1;
        fiveDayforecast1El.appendChild(date1El);
        var weathericon1El = document.createElement("img");
        weathericon1El.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon1 + ".png");
        weathericon1El.setAttribute("style", "width: 100px; height: 100px;")
        fiveDayforecast1El.appendChild(weathericon1El);
        var temperature1El = document.createElement("p");
        temperature1El.textContent = "Temperature: " + temperature1 + "°F";
        fiveDayforecast1El.appendChild(temperature1El);
        var humidity1El = document.createElement("p");
        humidity1El.textContent = "Humidity: " + humidity1 + "%";
        fiveDayforecast1El.appendChild(humidity1El);
        var windspeed1El = document.createElement("p");
        windspeed1El.textContent = "Wind Speed: " + windspeed1 + " MPH";
        fiveDayforecast1El.appendChild(windspeed1El);
        fiveDayforecast1El.setAttribute("class", "card col-2");
        fiveDayforecast1El.setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px; background-color: rgb(133, 183, 138); border-radius: 10px;");
        
        // day 2
        
        var date2 = data.list[15].dt_txt;
        date2 = date2.split(" ");
        date2 = date2[0];
        var weathericon2 = data.list[15].weather[0].icon;
        var temperature2 = data.list[15].main.temp;
        temperature2 = (temperature2 - 273.15) * 1.8 + 32;
        temperature2 = Math.round(temperature2);
        var humidity2 = data.list[15].main.humidity;
        var windspeed2 = data.list[15].wind.speed;
        windspeed2 = Math.round(windspeed2);
        var date2El = document.createElement("h3");
        date2El.textContent = date2;
        fiveDayforecast2El.appendChild(date2El);
        var weathericon2El = document.createElement("img");
        weathericon2El.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon2 + ".png");
        weathericon2El.setAttribute("style", "width: 100px; height: 100px;")
        fiveDayforecast2El.appendChild(weathericon2El);
        var temperature2El = document.createElement("p");
        temperature2El.textContent = "Temperature: " + temperature2 + "°F";
        fiveDayforecast2El.appendChild(temperature2El);
        var humidity2El = document.createElement("p");
        humidity2El.textContent = "Humidity: " + humidity2 + "%";
        fiveDayforecast2El.appendChild(humidity2El);
        var windspeed2El = document.createElement("p");
        windspeed2El.textContent = "Wind Speed: " + windspeed2 + " MPH";
        fiveDayforecast2El.appendChild(windspeed2El);
        fiveDayforecast2El.setAttribute("class", "card col-2");
        fiveDayforecast2El.setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px; background-color: rgb(133, 183, 138); border-radius: 10px;");
  
        // dAY 3
        var date3 = data.list[23].dt_txt;
        date3 = date3.split(" ");
        date3 = date3[0];
        var weathericon3 = data.list[23].weather[0].icon;
        var temperature3 = data.list[23].main.temp;
        temperature3 = (temperature3 - 273.15) * 1.8 + 32;
        temperature3 = Math.round(temperature3);
        var humidity3 = data.list[23].main.humidity;
        var windspeed3 = data.list[23].wind.speed;
        windspeed3 = Math.round(windspeed3);
        var date3El = document.createElement("h3");
        date3El.textContent = date3;
        fiveDayforecast3El.appendChild(date3El);
        var weathericon3El = document.createElement("img");
        weathericon3El.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon3 + ".png");
        weathericon3El.setAttribute("style", "width: 100px; height: 100px;")
        fiveDayforecast3El.appendChild(weathericon3El);
        var temperature3El = document.createElement("p");
        temperature3El.textContent = "Temperature: " + temperature3 + "°F";
        fiveDayforecast3El.appendChild(temperature3El);
        var humidity3El = document.createElement("p");
        humidity3El.textContent = "Humidity: " + humidity3 + "%";
        fiveDayforecast3El.appendChild(humidity3El);
        var windspeed3El = document.createElement("p");
        windspeed3El.textContent = "Wind Speed: " + windspeed3 + " MPH";
        fiveDayforecast3El.appendChild(windspeed3El);
        fiveDayforecast3El.setAttribute("class", "card col-2");
        fiveDayforecast3El.setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px; background-color: rgb(133, 183, 138); border-radius: 10px;");
       
        //DAY 4
        var date4 = data.list[31].dt_txt;
        date4 = date4.split(" ");
        date4 = date4[0];
        var weathericon4 = data.list[31].weather[0].icon;
        var temperature4 = data.list[31].main.temp;
        temperature4 = (temperature4 - 273.15) * 1.8 + 32;
        temperature4 = Math.round(temperature4);
        var humidity4 = data.list[31].main.humidity;
        var windspeed4 = data.list[31].wind.speed;
        windspeed4 = Math.round(windspeed4);
        var date4El = document.createElement("h3");
        date4El.textContent = date4;
        fiveDayforecast4El.appendChild(date4El);
        var weathericon4El = document.createElement("img");
        weathericon4El.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon4 + ".png");
        weathericon4El.setAttribute("style", "width: 100px; height: 100px;")
        fiveDayforecast4El.appendChild(weathericon4El);     
        var temperature4El = document.createElement("p");
        temperature4El.textContent = "Temperature: " + temperature4 + "°F";
        fiveDayforecast4El.appendChild(temperature4El);
        var humidity4El = document.createElement("p");
        humidity4El.textContent = "Humidity: " + humidity4 + "%";
        fiveDayforecast4El.appendChild(humidity4El);
        var windspeed4El = document.createElement("p");
        windspeed4El.textContent = "Wind Speed: " + windspeed4 + " MPH";
        fiveDayforecast4El.appendChild(windspeed4El);
        fiveDayforecast4El.setAttribute("class", "card col-2");
        fiveDayforecast4El.setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px; background-color: rgb(133, 183, 138); border-radius: 10px;");

        //DAY 5
        var date5 = data.list[39].dt_txt;
        date5 = date5.split(" ");
        date5 = date5[0];
        var weathericon5 = data.list[39].weather[0].icon;
        var temperature5 = data.list[39].main.temp;
        temperature5 = (temperature5 - 273.15) * 1.8 + 32;
        temperature5 = Math.round(temperature5);
        var humidity5 = data.list[39].main.humidity;
        var windspeed5 = data.list[39].wind.speed;
        windspeed5 = Math.round(windspeed5);
        var date5El = document.createElement("h3");
        date5El.textContent = date5;
        fiveDayforecast5El.appendChild(date5El);
        var weathericon5El = document.createElement("img");
        weathericon5El.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon5 + ".png");
        weathericon5El.setAttribute("style", "width: 100px; height: 100px;")
        fiveDayforecast5El.appendChild(weathericon5El);
        var temperature5El = document.createElement("p");
        temperature5El.textContent = "Temperature: " + temperature5 + "°F";
        fiveDayforecast5El.appendChild(temperature5El);
        var humidity5El = document.createElement("p");
        humidity5El.textContent = "Humidity: " + humidity5 + "%";
        fiveDayforecast5El.appendChild(humidity5El);
        var windspeed5El = document.createElement("p");
        windspeed5El.textContent = "Wind Speed: " + windspeed5 + " MPH";
        fiveDayforecast5El.appendChild(windspeed5El);
        fiveDayforecast5El.setAttribute("class", "card col-2");
        fiveDayforecast5El.setAttribute("style", "border: 1px solid black; padding: 10px; margin: 10px; background-color: rgb(133, 183, 138); border-radius: 10px;");
    });
}   
// search button
getweatherbtn.addEventListener("click", function(event) {
    event.preventDefault();
    var city = document.querySelector("#city").value;
    var  cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIkey;
    console.log(city);
    getCity(cityURL);
    var cityEl = document.createElement("button");
    cityEl.textContent = city;
    cityEl.setAttribute("class", "btn btn-primary");
    cityEl.setAttribute("style", "width: 100%; margin: 5px 0px;");
    cityEl.setAttribute("id", "city");
    cityEl.setAttribute("type", "button");
    cityEl.setAttribute("data-city", city);
    favoritesEl.appendChild(cityEl);
    saveCity(city);
});
// SAVING CITY TO LOCAL STORAGE
function saveCity(city) {
    var cities = JSON.parse(localStorage.getItem("cities")) || [];
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
  } 
// GETTING CITY FROM LOCAL STORAGE`
function getCities() {
    var cities = JSON.parse(localStorage.getItem("cities")) || [];
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        var cityEl = document.createElement("button");
        cityEl.textContent = city;
        cityEl.setAttribute("class", "btn btn-primary");
        cityEl.setAttribute("style", "width: 100%; margin: 5px 0px;");
        cityEl.setAttribute("id", "city");
        cityEl.setAttribute("type", "button");
        cityEl.setAttribute("data-city", city);
        favoritesEl.appendChild(cityEl);
        // CITY BUTTONS
        cityEl.addEventListener("click", function(event) {
            event.preventDefault();
            var city = event.target.getAttribute("data-city");
            var  cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIkey;
            console.log(city);
            getCity(cityURL);
        }
        );
    }
}

// CLEARING FAVORITES
function clearFavorites() {
    localStorage.clear();
    favoritesEl.innerHTML = "";
}

// CLEAR FAVORITES BUTTON
clearfavoritesbtn.addEventListener("click", function(event) {
    event.preventDefault();
    clearFavorites();
}
);

