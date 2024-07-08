const apikey = "6a19c546e810f5e2c1f8c6116e3e9123";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".button");
async function getWeather(city) {
    const response = await fetch(url + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".temp-min").innerHTML = data.main.temp_min + "°C";
    document.querySelector(".temp-max").innerHTML = data.main.temp_max + "°C";

}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})