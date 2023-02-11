function windchill(temp, windSpeed) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
}
const windchillElement = document.querySelector("#Wind-Chill");
let temp = document.querySelector("#Temp").textContent;
let windSpeed = document.querySelector("#Wind-Speed").textContent;
let chill = windchill(temp, windSpeed);
windchillElement.innerHTML = temp >= 50 ? "N/A" : chill + "°F";