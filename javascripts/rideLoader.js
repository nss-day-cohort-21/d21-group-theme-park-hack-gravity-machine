"use strict";


let rideArray = [];
let rideObject = {};

function fillRideArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        rideArray.push(data[item]);
    });

}

rideObject.getRideArray = () => {

    return rideArray;
};

rideObject.loadRideArray = () => {
    let val = 1;
    return new Promise(function(resolve, reject) {
        var rideLoader = new XMLHttpRequest();
        rideLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        rideLoader.send();
        rideLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillRideArray(data);
            resolve(rideArray);
        });
    });
};

rideObject.getRideArray = () => {
    return rideArray;
};

module.exports = rideObject;