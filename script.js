updateView = (weatherData) => {
  const detailsTemp = weatherData.main;
  const detailsWind = weatherData.wind;
  const detailsWeather = weatherData.weather[0];

  const { icon } = detailsWeather;

  console.log(detailsTemp, detailsWind, { icon }, detailsWeather);
  let locationIcon = document.querySelector('.weatherImage');
  locationIcon.innerHTML = `<img id="weatherIcon" src="icons/${icon}.png"></img>`;

  document.getElementById('temp').innerHTML =
    Math.round(detailsTemp.temp) + '°C';

  document.getElementById('feels_like').innerHTML =
    'Feels like ' + Math.round(detailsTemp.feels_like) + ' °C';

  document.getElementById('weatherNow').innerHTML =
    'WEATHER NOW: ' + detailsWeather.main;

  document.getElementById('wind').innerHTML =
    'WIND: ' + Math.round(detailsWind.speed) + ' m/s';

  document.getElementById('humidity').innerHTML =
    'HUMIDITY: ' + detailsTemp.humidity + ' %';

  document.getElementById('pressure').innerHTML =
    'AIR PRESSURE: ' + detailsTemp.pressure + ' hPa';
};

fetchWeather = async () => {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=tampere&appid=<YOUR_TOKEN_HERE>&units=metric'
    );
    const data = await response.json();
    console.log(data);
    updateView(data);
  } catch (error) {
    console.error(error);
  }
};

fetchWeather();
