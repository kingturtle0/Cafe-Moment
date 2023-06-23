API_KEY = "3bea77066e1ae3ddce32003b15b49ffd";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city");
      const weather = document.querySelector("#weather");
      const weatherImg = weather.querySelector("img");
      const weatherTemp = weather.querySelector("span");

      city.innerText = data.name;
      weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherTemp.innerText = `${Math.round(data.main.temp)}°`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you :(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
