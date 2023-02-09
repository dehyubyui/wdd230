const requestURL = 'https://github.com/wdd130cassell/wdd230/blob/master/Chamber/scripts/data/towndata.json'
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
         townArray["Monrovia"] = monrovia;
     } else if(towns[i].name == "harbel") {
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

})