"use strict";


let libertyArray = [];
let libertyObject = {};

function fillLibertyArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
        libertyArray.push(data[item]);

    });
    //console.log("

}

libertyObject.getLibertyArray = () => {
    return libertyArray;
};

libertyObject.loadLibertyArray = () => {
	//let val = 8;
    return new Promise(function(resolve, reject) {
        var libertyLoader = new XMLHttpRequest();
        libertyLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=4`);
        libertyLoader.send();
        libertyLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillLibertyArray(data);
            resolve(libertyArray);

        });
    });
};

module.exports = libertyObject;