const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
var townArray = [];
function Town(rainfall,
              population, events,
              motto, name,
              photo, founded
              ) {
    this.averageRainfall = rainfall;
    this.population = population
    this.events = events;
    this.motto = motto;
    this.name = name;
    this.photo = photo;
    this.founded = founded;
    return this;
}

function buildTownStructure(containerClass, townObject){
    let townSection = document.createElement('div');
    container = document.querySelector(containerClass);
    townSection.classList.add('townBanner');
    container.appendChild(townSection);
    queryCity = `${containerClass} > div:last-of-type`;
    let city = document.querySelector(queryCity);
    let cityImage = document.createElement('img');
    cityImage.src = `images/${townObject.photo}`
    cityImage.alt = `photo of ${townObject.name}`
    city.appendChild(cityImage);
    let cityInfo = document.createElement('div');
    city.appendChild(cityInfo);
    let cityName = document.createElement('h4');
    cityName.textContent = townObject.name;
    cityInfo.appendChild(cityName);
    let cityMotto = document.createElement('h5');
    cityMotto.textContent = townObject.motto;
    cityInfo.appendChild(cityMotto);
    let cityFounded = document.createElement('p');
    cityFounded.textContent = `Year founded: ${townObject.name}`;
    cityInfo.appendChild(cityFounded);
    let cityPopulation = document.createElement('p');
    cityPopulation.textContent = `Population: ${townObject.population}`;
    cityInfo.appendChild(cityPopulation);
    let cityRainfall = document.createElement('p');
    cityRainfall.textContent = `Annual rainfall: ${townObject.averageRainfall}"`;
    cityInfo.appendChild(cityRainfall);    
}

function getList(townEvents) {
    var events = [];
    townEvents.forEach(element => {
        events.push(element);
    });
    return events;
}

var townName = "";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let towns = jsonObject['towns'];      
    var townArray = {};
    var eventList = [];
    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name == "Fish Haven") {
            eventList = getList(towns[i].events);
            var fishHaven = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList, towns[i].motto,
                                towns[i].name, towns[i].photo,
                                towns[i].yearFounded,                                  
                                )
            townArray["fishHaven"]= fishHaven;
        } else if(towns[i].name == "Preston") {
            eventList = getList(towns[i].events);
            var preston = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList, towns[i].motto,
                                towns[i].name, towns[i].photo,
                                towns[i].yearFounded,                                  
                                )            
            townArray["preston"]= preston;
        } else if(towns[i].name == "Soda Springs") {
            eventList = getList(towns[i].events);
            var sodaSprings = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList,
                                towns[i].motto, towns[i].name,                      
                                towns[i].photo, towns[i].yearFounded,                                  
                                )            
            townArray["sodaSprings"]= sodaSprings;
        }   
      }
      buildTownStructure(".town-data",townArray["preston"]);
      buildTownStructure(".town-data",townArray["sodaSprings"]);
      buildTownStructure(".town-data",townArray["fishHaven"]);
      let eventSection = document.querySelector(".events");
      let prestonEvents = document.createElement("div");
      prestonEvents.appendChild(document.createElement("h4"));
      prestonEvents.querySelector("h4").textContent = "Preston";
      townArray["preston"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        prestonEvents.appendChild(eventContent);
      });

      eventSection.appendChild(prestonEvents);
      let sodaSpringsEvents = document.createElement("div");
      sodaSpringsEvents.appendChild(document.createElement("h4"));
      sodaSpringsEvents.querySelector("h4").textContent = "Soda Spring";
      townArray["sodaSprings"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        sodaSpringsEvents.appendChild(eventContent);
      });      

      eventSection.appendChild(sodaSpringsEvents);      
      let fishHavenEvents = document.createElement("div");
      fishHavenEvents.appendChild(document.createElement("h4"));
      fishHavenEvents.querySelector("h4").textContent = "Fish Haven";
      townArray["fishHaven"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        fishHavenEvents.appendChild(eventContent);
      });           
      eventSection.appendChild(fishHavenEvents);
  });