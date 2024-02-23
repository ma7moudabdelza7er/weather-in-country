const apiKey = "20b28f42dc40368a20797e1e097cdfea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherI = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data["main"]["humidity"] + ` %<br> humidity`;
        document.querySelector(".wind").innerHTML = data["wind"]["speed"] + ` Km/h <br> Wind Speed`;

        if (data.weather[0].main == 'Clouds') {
            weatherI.src = "img/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherI.src = "img/sun.png";
        } else if (data.weather[0].main == 'Rain') {
            weatherI.src = "img/rain.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherI.src = "img/drizzle.png";
        } else if (data.weather[0].main == 'Mist') {
            weatherI.src = "img/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})
