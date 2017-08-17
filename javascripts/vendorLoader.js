"use strict";


let vendorArray = [];
let vendorObject = {};

function fillvendorArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        vendorArray.push(data[item]);
    });

}

vendorObject.getvendorArray = () => {
    return vendorArray;
};

vendorObject.loadvendorArray = () => {
    let val = 4;
    return new Promise(function(resolve, reject) {
        var vendorLoader = new XMLHttpRequest();
        vendorLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        vendorLoader.send();
        vendorLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            console.log(data);
            fillvendorArray(data);
            resolve(vendorArray);
        });
    });
};

module.exports = vendorObject;