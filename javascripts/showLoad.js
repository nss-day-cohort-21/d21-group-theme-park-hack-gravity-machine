"use strict";


let showArray = [];
let showObject = {};

function fillshowArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        showArray.push(data[item]);
    });

}

showObject.getshowArray = () => {
    return showArray;
};

showObject.loadshowArray = () => {
    let val = 3;
    return new Promise(function(resolve, reject) {
        var showLoader = new XMLHttpRequest();
        showLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        showLoader.send();
        showLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            console.log(data);
            fillshowArray(data);
            resolve(showArray);
        });
    });
};


showObject.getshowArray = () => {
    return showArray;
};
module.exports = showObject;