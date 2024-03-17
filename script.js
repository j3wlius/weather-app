const searchBox = document.querySelector('#search-box');
const apiKey = 'ddc9783a6d63ce99dd905ab69bd9e115';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const searchBtn = document.querySelector('.search-btn');
const weatherIcon = document.querySelector('.weather-icon');
// console.log(cityName);
// console.log(apiUrl);

async function weatherUpdate(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather-card').style.display = 'none';
  } else {
    let weatherData = await response.json();

    // console.log(weatherData)
    // console.log(weatherData.name)

    document.querySelector('.temp').innerHTML =
      Math.round(weatherData.main.temp) + '°C';
    document.querySelector('.city').innerHTML = weatherData.name;
    document.querySelector('.wind-speed').innerHTML =
      weatherData.wind.speed + ' km/hr';
    document.querySelector('.humidity').innerHTML =
      weatherData.main.humidity + ' grams/m3';

    // if(weatherData.weather[0].main = 'Clouds'){
    //     weatherIcon.src = 'images/clouds.png'
    // }

    switch (weatherData.weather[0].main) {
      case 'Clouds':
        weatherIcon.src = 'images/clouds.png';
        break;

      case 'Rain':
        weatherIcon.src = 'images/rain.png';
        break;

      case 'Mist':
        weatherIcon.src = 'images/mist.png';
        break;

      case 'Clear':
        weatherIcon.src = 'images/clear.png';
        break;

      case 'Drizzle':
        weatherIcon.src = 'images/drizzle.png';
        break;
    }

    document.querySelector('.weather-card').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
}

searchBtn.addEventListener('click', () => {
  weatherUpdate(searchBox.value);
  searchBox.value = '';
});
