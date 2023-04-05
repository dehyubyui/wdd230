const requestURL = 'https://raw.githubusercontent.com/AndrewJBedford/wdd230/master/lesson13/directory/ocalaevents.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        let ocala = jsonObject['ocala'];
        for (let i = 0; i < ocala.length; i++) {
            if (ocala[i].name == ocalaName) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                h2.textContent = ocala[i].name + "Events:";
                card.appendChild(h2);
                document.querySelector('div.events').appendChild(card);

                for (let e = 0; e < ocala[i].events.length; e++) {
                    let p1 = document.createElement('p');
                    p1.textContent = ocala[i].events[e];
                    card.appendChild(p1);
                }

            }
        }
    });
