"use strict";


let tomorrowArray = [];
let tomorrowObject = {};

function fillTomorrowArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
        tomorrowArray.push(data[item]);

    });
    //console.log("

}

tomorrowObject.getTomorrowArray = () => {
    return tomorrowArray;
};

tomorrowObject.loadTomorrowArray = () => {
	//let val = 8;
    return new Promise(function(resolve, reject) {
        var tomorrowLoader = new XMLHttpRequest();
        tomorrowLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=6`);
        tomorrowLoader.send();
        tomorrowLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillTomorrowArray(data);
            resolve(tomorrowArray);

        });
    });
};

module.exports = tomorrowObject;