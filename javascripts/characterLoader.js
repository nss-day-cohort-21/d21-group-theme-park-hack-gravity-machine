"use strict";


let characterArray = [];
let characterObject = {};

function fillcharacterArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        characterArray.push(data[item]);
    });

}

characterObject.getcharacterArray = () => {
    return characterArray;
};

characterObject.loadcharacterArray = () => {
    let val = 5;
    return new Promise(function(resolve, reject) {
        var characterLoader = new XMLHttpRequest();
        characterLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        characterLoader.send();
        characterLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            console.log(data);
            fillcharacterArray(data);
            resolve(characterArray);
        });
    });
};

module.exports = characterObject;