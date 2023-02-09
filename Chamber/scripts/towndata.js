
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
    const towns = jsonObject['towns'];      
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
      var townName = "";
if (document.getElementById("preston")) {
    townName = "Preston";
} else if (document.getElementById("sodaSprings")) {
    townName = "Soda Springs";
} else if (document.getElementById("fishHaven")) {
    townName = "Fish Haven";
}
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