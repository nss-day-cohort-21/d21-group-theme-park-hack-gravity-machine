"use strict";



let namesArray = [];
let areaNamesObject = {};
let attractionNamesObject = {};

function fillNameArray(data) {
    let keys = Object.keys(data);
    keys.forEach((attractions) => {
        data[attractions].firebaseID = attractions;
        namesArray.push(data[attractions]);
    });
    keys.forEach((areas) => {
        data[areas].firebaseID = areas;
        namesArray.push(data[areas]);
    });

    console.log("namesArray", namesArray);
}