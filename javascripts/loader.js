"use strict";

console.log("loader.js");
//Empty Array and Object to push to
let areaArray = [];
let areaObject = {};


//keys to push items from the object to the array.
function fillAreaArray(data) {

    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        areaArray.push(data[item]);
    });
}

//Get the Object info to return the array
areaObject.getAreaArray = () => {
    return areaArray;
};

//Loading the json file
areaObject.loadAreaArray = () => {
    return new Promise(function(resolve, reject) {
        var areaLoader = new XMLHttpRequest();
        areaLoader.open("GET", "https://theme-park-cfa10.firebaseio.com/areas.json");
        areaLoader.send();
        areaLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            resolve(data); // No longer responsible for calling populatePage function

        });
    });
};

areaObject.getAreaArray = () => {
    return areaArray;
};

module.exports = areaObject;