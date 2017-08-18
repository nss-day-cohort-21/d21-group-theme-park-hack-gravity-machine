"use strict";


let foodArray = [];
let foodObject = {};

function fillfoodArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        foodArray.push(data[item]);
    });

}

foodObject.getfoodArray = () => {
    return foodArray;
};

foodObject.loadfoodArray = () => {
    let val = 2;
    return new Promise(function(resolve, reject) {
        var foodLoader = new XMLHttpRequest();
        foodLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        foodLoader.send();
        foodLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillfoodArray(data);
            resolve(foodArray);
        });
    });
};

foodObject.getfoodArray = () => {
    return foodArray;
};

module.exports = foodObject;