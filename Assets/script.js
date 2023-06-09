const APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42";
let city = document.querySelector("#city").value;
let lat, lon;

const weatherEl = document.getElementById("weather");
const fiveDayforecastEl = document.querySelectorAll(".fivedayforecast");
const favoritesEl = document.getElementById("favorites");
const weathercontainerEl = document.getElementsByClassName("weathercontainer")[0];
const clearhistorybtn = document.querySelector("#clearhistorybtn");
const clearfavoritesbtn = document.querySelector("#clearfavoritesbtn");
const getweatherbtn = document.querySelector("#getweatherbtn");
