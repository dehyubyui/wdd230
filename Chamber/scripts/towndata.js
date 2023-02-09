const requestURL = 'https://github.com/wdd130cassell/weather/blob/master/data/towndata.json';
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
        if(towns[i].name == "Bong") {
            eventList = getList(towns[i].events);
            var bong = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList, towns[i].motto,
                                towns[i].name, towns[i].photo,
                                towns[i].yearFounded,                                  
                                )
            townArray["bong"]= bong;
        } else if(towns[i].name == "monrovia") {
            eventList = getList(towns[i].events);
            var monrovia = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList, towns[i].motto,
                                towns[i].name, towns[i].photo,
                                towns[i].yearFounded,                                  
                                )            
            townArray["monrovia"]= monrovia;
        } else if(towns[i].name == "harbel") {
            eventList = getList(towns[i].events);
            var harbel = new Town(
                                towns[i].averageRainfall,
                                towns[i].currentPopulation,
                                eventList,
                                towns[i].motto, towns[i].name,                      
                                towns[i].photo, towns[i].yearFounded,                                  
                                )            
            townArray["harbel"]= harbel;
        }   
      }
      var townName = "";
if (document.getElementById("monrovia")) {
    townName = "Monrovia";
} else if (document.getElementById("harbel")) {
    townName = "Harbel";
} else if (document.getElementById("bong")) {
    townName = "Bong";
}
      let eventSection = document.querySelector(".events");
      let monroviaEvents = document.createElement("div");
      monroviaEvents.appendChild(document.createElement("h4"));
      monroviaEvents.querySelector("h4").textContent = "monrovia";
      townArray["monrovia"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        prestonEvents.appendChild(eventContent);
      });

      eventSection.appendChild(prestonEvents);
      let harbelEvents = document.createElement("div");
      harbelEvents.appendChild(document.createElement("h4"));
      harbelEvents.querySelector("h4").textContent = "harbel";
      townArray["harbel"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        harbelEvents.appendChild(eventContent);
      });      

      eventSection.appendChild(harbelEvents);      
      let bongEvents = document.createElement("div");
      bongEvents.appendChild(document.createElement("h4"));
      bongEvents.querySelector("h4").textContent = "Bong";
      townArray["Bong"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        bongEvents.appendChild(eventContent);
      });           
      eventSection.appendChild(bongEvents);
  });