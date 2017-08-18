"use strict";
console.log("special events Loader");

let specialEventsArray = [];
let specialEventsObject = {};

function fillspEventsArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        specialEventsArray.push(data[item]);

    });
}

specialEventsObject.getspecialEventsArray = () => {
    return specialEventsArray;
};

specialEventsObject.loadspecialEventsArray = () => {
	let val = 8;
    return new Promise(function(resolve, reject) {
        var spEventsLoader = new XMLHttpRequest();
        spEventsLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        spEventsLoader.send();
        spEventsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillspEventsArray(data);
            resolve(specialEventsArray);

        });
    });
};

module.exports = specialEventsObject;





