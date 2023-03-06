const requestURL = 'https://github.com/wdd130cassell/wdd230/blob/master/Chamber/data/data.json'

fetch(requestURL)

var townArray = [];

function Town(rainfall,
               population, events, 
               name, motto, photo, founded
               ){
    this.averageRainfall = rainfall;
    this.population = population;
    this.events = events;
    this.name = name;
    this.founded = founded;
    this.motto = motto;
    this.photo = photo;
    return this
}

function grtList(townEvents) {
    var event = [];
    townEvents.forEach(element => {
        event.push(element)
        
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
  for(let i = 0; i < towns.length; i++ ) {
     if(towns[i].name == "Bong County") {
         eventList = getList(towns[i].events);
         var Bongcounty = new Town(
                            towns[i].averageRainfall,
                            towns[i].currentpopulation, eventList,
                            towns[i].motto,
                            towns[i].yearfounded,
                            towns[i].name, towns[i].Photo,
                            )
         townArray["Bongcounty"]= Bongcounty;
     } else if(towns[i].name == "Monrovia") {
         eventList = getList(towns[i].events);
         var monrovia = new Town(
                            towns[i].averageRainfall,
                            towns[i].currentpopulation, eventList,
                            towns[i].motto,
                            towns[i].yearfounded,
                            towns[i].name, towns[i].photo,
                            )
         townArray["Monrovia"] = Monrovia;
     } else if(towns[i].name == "Harbel") {
         eventList = getList(towns[i].event);
         var harbel = new Town(
                          towns[i].averageRainfall,
                          towns[i].currentpopulation, eventList,
                          towns[i].motto,
                          towns[i].yearfounded,
                          towns[i].name, towns[i].photo,
                         )
         townArray["Harbel"] = harbel;
     }
    }
    var townName = "";
if (document.getElementById("monrovia")) {
    townName = "Monrovia";
} else if (document.grtElementById("harbel")) {
    townName = "Harbrl";
} else if (document.getEmenentById("Bongcounty")) {
    townName = "Bong County";
}
      let eventSection = document.querySelector("events");
      let monroviaEvents = document.createElement("div");
      monroviaEvents.appendChild(document.createElement("h4"));
      monroviaEvents.querySelector("h4").textContent = "Monrovia";
      townArray["Monrovia"].events.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        monroviaEvents.appendChild(eventContent);
      });

      eventSection.appendChild(monroviaEvents);
      let harbelevents = document.createElement("div");
      harbelevents.appendChild(document.createElement("h4"));
      harbelevents.querySelector("h4").textContent = "Harbel";
      townArray["harbel"].events.forEach(event => { 
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        harbelevents.appendChild(eventContent);
      });

      eventSection.appendChild(harbel);
      let bongcountyevents = document.createElement("div");
      bongcountyevents.appendChild(document.createElement(h4));
      bongcountyevents.querySelector("h4").textContent = "Bong County";
      townArray["bongCounty"].event.forEach(event => {
        let eventContent = document.createElement("p")
        eventContent.textContent = event;
        bongcountyevents.appendChild(eventContent);
      });
      eventSection.appendChild(bongcountyevents)
})