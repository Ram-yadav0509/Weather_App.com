
const apiKey = "61505696d812dfe0ad833d7319881b80";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


async function checkWeather(city) {

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    const data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }



}

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// console.log(weatherIcon.src);

searchButton.addEventListener('click', () => {
  checkWeather(searchInput.value);
})
