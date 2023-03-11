// Using an API, gets the weather and temp for Monrovia Liberiia

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#windspeed');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.30058&lon=-10.7969&units=imperial&appid=8e06e6dd94ca152d382b507a3e4f2652'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(`Error:${error}`);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)} mph`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    let descUp = desc.toUpperCase();
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descUp);
    captionDesc.textContent = descUp;

  const t = weatherData.main.temp.toFixed(0);
  const windspeed = weatherData.wind.speed.toFixed(0);
  let windChillFahrenheit = document.querySelector("#windChillFahrenheit");

  if (t <= 50 && windspeed >= 3.0) {
      windChillFahrenheit = 35.74 + (0.6215*t) - (35.75*Math.pow(windspeed, 0.16)) + (0.4275*t*Math.pow(windspeed, 0.16));

      windChillFahrenheit = windChillFahrenheit.toFixed(2);

      document.querySelector("#windChillFahrenheit").innerHTML = `${windChillFahrenheit} F`;
  }
  else {
      document.querySelector("#windChillFahrenheit").innerHTML = "N/A";
  }
}


