"use strict";
//console.log("adventure land");

let adventureArray = [];
let adventureObject = {};

function fillAdventureArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
        adventureArray.push(data[item]);

    });
    //console.log("adventure info:", adventureArray);

}

adventureObject.getAdventureArray = () => {
    return adventureArray;
};

adventureObject.loadAdventureArray = () => {
	
    return new Promise(function(resolve, reject) {
        var adventureLoader = new XMLHttpRequest();
        adventureLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=2`);
        adventureLoader.send();
        adventureLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillAdventureArray(data);
            resolve(adventureArray);

        });
    });
};

module.exports = adventureObject;