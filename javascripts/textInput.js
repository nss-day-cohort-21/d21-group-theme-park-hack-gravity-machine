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

//get inventory
areaNamesObject.getnamesArray = () => {
    return namesArray;
};


areaNamesObject.fillNameArray = () => {
    return new Promise(function(resolve, reject) {
        $.ajax({
                url: `https://theme-park-cfa10.firebaseio.com/theme-park.json?orderBy="areas"&equalTo="name"`
            })
            .done(function(data) {
                fillNameArray(data);
                console.log('namesArray', data);
                resolve(namesArray);
            })
            .fail(reject);
    });
};

console.log(areaNamesObject);
module.exports = areaNamesObject;