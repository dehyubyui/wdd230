function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Select the elements to manipulate (output to)
const datefield = document.querySelector(".current-date");


// Derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

let last_modif = new Date(document.lastModified);

const modif_date = `Last Modified: ${last_modif}`;
document.querySelector("#last-modified").textContent = modif_date;

document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

// Gets the day of the week. If it is Monday or Tuesday, set the event tab to display as block. Otherwise, leave display as none.

const d = new Date();
let day = d.getDay();

if (day == 1 || day == 2) {
    document.querySelector(".event-tab").style.display = "block";
}

// Gets the current date and time from a hidden field

const date = new Date();
const dateTime = now.toLocaleString();

let hiddenField = document.createElement("input");
hiddenField.setAttribute("type", "hidden");
hiddenField.setAttribute("id", "dateTime");
hiddenField.setAttribute("name", "dateTime");
hiddenField.setAttribute("value", dateTime);
document.body.appendChild(hiddenField);

// Using an API, gets the weather and temp for Layton City

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


