"use strict";

console.log("game loader!");

let gamesArray = [];
let gamesObject = {};

function fillGamesArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        gamesArray.push(data[item]);

    });
    console.log("Games Array:", gamesArray);
}

gamesObject.getGamesArray = () => {
    return gamesArray;
};

gamesObject.loadGamesArray = () => {
    let val = 7;
    return new Promise(function(resolve, reject) {
        var gamesLoader = new XMLHttpRequest();
        gamesLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="type_id"&equalTo=${val}`);
        gamesLoader.send();
        gamesLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillGamesArray(data);
            resolve(gamesArray);

        });
    });
};
module.exports = gamesObject;