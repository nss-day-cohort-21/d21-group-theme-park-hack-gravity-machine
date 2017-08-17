"use strict";
console.log("main street info");

let mainStreetArray = [];
let mainStreetObject = {};

function fillMainStreetArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
        mainStreetArray.push(data[item]);

    });
    console.log("Main Street Info:", mainStreetArray);

}

mainStreetObject.getMainStreetArray = () => {
    return mainStreetArray;
};

mainStreetObject.loadMainStreetArray = () => {
	//let val = 8;
    return new Promise(function(resolve, reject) {
        var mainStreetLoader = new XMLHttpRequest();
        mainStreetLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/areas.json?orderBy="id"&equalTo=1`);
        mainStreetLoader.send();
        mainStreetLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillMainStreetArray(data);
            resolve(mainStreetArray);

        });
    });
};

module.exports = mainStreetObject;