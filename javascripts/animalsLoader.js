"use strict";
console.log("animals Loader");

let animalsArray = [];
let animalsObject = {};

function fillAnimalsArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        animalsArray.push(data[item]);
    });
}

animalsObject.getAnimalsArray = () => {
    return animalsArray;
};

animalsObject.loadAnimalsArray = () => {
	let val = "6";
    return new Promise(function(resolve, reject) {
        var animalsLoader = new XMLHttpRequest();
        animalsLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        animalsLoader.send();
        animalsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillAnimalsArray(data);
            resolve(animalsArray);

        });
    });
};

module.exports = animalsObject;