const apiKey = "51a6e207841a07d50665a172834772c9";
const city = document.querySelector('input[type="text"]');
const inputBtn = document.querySelector('input[type="button"]');

if (inputBtn) {
  inputBtn.addEventListener("click", () => {
    getCurrentWeather(city.value);
    getFiveDayForecast(city.value);
  });
}

const currentWeather = {};
const fiveday = {};

const getCurrentWeather = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      currentWeather.cityName = data.name;
      currentWeather.currentDate = data.dt;
      currentWeather.icon = data.weather[0].icon;
      currentWeather.temperature = data.main.temp;
      currentWeather.humidity = data.main.humidity;
      currentWeather.windSpeed = data.wind.speed;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getFiveDayForecast = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

console.log(currentWeather);
