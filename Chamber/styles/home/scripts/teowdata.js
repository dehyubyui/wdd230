const requestURL = 'https://github.com/wdd130cassell/cse121b/blob/master/weather/data/towndata.json';
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
        if(towns[i].name == "BongCounty") {
            eventList = getList(towns[i].events);
            var BongCounty = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList, towns[i].motto,
                                towns[i].name, towns[i].photo,
                                towns[i].yearFounded,                                  
                                )
            townArray["BongCounty"]= fishHaven;
        } else if(towns[i].name == "Monrovia") {
            eventList = getList(towns[i].events);
            var preston = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList, towns[i].motto,
                                towns[i].name, towns[i].photo,
                                towns[i].yearFounded,                                  
                                )            
            townArray["Monrovia"]= Monrovia;
        } else if(towns[i].name == "Harbel") {
            eventList = getList(towns[i].events);
            var Harbel = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList,
                                towns[i].motto, towns[i].name,                      
                                towns[i].photo, towns[i].yearFounded,                                  
                                )            
            townArray["Harbel"]= Harbrl;
        }   
      }
      buildTownStructure(".town-data",townArray["Monrovia"]);
      buildTownStructure(".town-data",townArray["Harbel"]);
      buildTownStructure(".town-data",townArray["Bong"]);
      let eventSection = document.querySelector(".events");
      let monroviaEvents = document.createElement("div");
      monroviaEvents.appendChild(document.createElement("h4"));
      monroviaEvents.querySelector("h4").textContent = "Monrovia";
      townArray["Monrovia"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        monroviaEvents.appendChild(eventContent);
      });

      eventSection.appendChild(monroviaEvents);
      let harbelEvents = document.createElement("div");
      harbelEvents.appendChild(document.createElement("h4"));
      harbelEvents.querySelector("h4").textContent = "Harbel";
      townArray["Harbel"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        harbelEvents.appendChild(eventContent);
      });      

      eventSection.appendChild(HarbelEvents);      
      let fishHavenEvents = document.createElement("div");
      BongCountyEvents.appendChild(document.createElement("h4"));
      BongCountyEvents.querySelector("h4").textContent = "Bong County";
      townArray["BongCounty"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        bongCountyEvents.appendChild(eventContent);
      });           
      eventSection.appendChild(bongcountyEvents);
  });