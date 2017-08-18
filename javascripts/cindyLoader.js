"use strict";


let cindyArray = [];
let cindyObject = {};

function fillCindyArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
       cindyArray.push(data[item]);

    });
    //console.log("

}

cindyObject.getCindyArray = () => {
    return cindyArray;
};

cindyObject.loadCindyArray = () => {
	//let val = 8;
    return new Promise(function(resolve, reject) {
        var cindyLoader = new XMLHttpRequest();
        cindyLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=7`);
        cindyLoader.send();
        cindyLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillCindyArray(data);
            resolve(cindyArray);

        });
    });
};

module.exports = cindyObject;