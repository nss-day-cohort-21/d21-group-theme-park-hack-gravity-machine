"use strict";


let timeArray = [];
let timeObject = {};


function filltimeArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        timeArray.push(data[item]);
    });

}

timeObject.gettimeArray = () => {
    return timeArray;
};


timeObject.loadtimeArray = (val) => {
    return new Promise(function(resolve, reject) {
        var timeLoader = new XMLHttpRequest();
        timeLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);

        timeLoader.send();
        timeLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            console.log(data);
            filltimeArray(data);
            resolve(timeArray);
        });
    });
};

//function to export the array as returned data
timeObject.gettimeArray = () => {
    return timeArray;
};


module.exports = timeObject;