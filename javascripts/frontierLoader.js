"use strict";
console.log("frontier info");

let frontierArray = [];
let frontierObject = {};

function fillFrontierArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
        frontierArray.push(data[item]);

    });
    console.log("frontierland Info:", frontierArray);

}

frontierObject.getFrontierArray = () => {
    return frontierArray;
};

frontierObject.loadFrontierArray = () => {
	
    return new Promise(function(resolve, reject) {
        var frontierLoader = new XMLHttpRequest();
        frontierLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=3`);
        frontierLoader.send();
        frontierLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillFrontierArray(data);
            resolve(frontierArray);

        });
    });
};

module.exports = frontierObject;