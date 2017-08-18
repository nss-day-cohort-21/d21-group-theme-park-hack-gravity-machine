"use strict";


let fantasyArray = [];
let fantasyObject = {};

function fillFantasyArray(data) {
    let keys = Object.keys(data);

    keys.forEach((item) => {
        data[item].firebaseID = item;
        fantasyArray.push(data[item]);

    });
    //console.log("

}

fantasyObject.getFantasyArray = () => {
    return fantasyArray;
};

fantasyObject.loadFantasyArray = () => {
	//let val = 8;
    return new Promise(function(resolve, reject) {
        var fantasyLoader = new XMLHttpRequest();
        fantasyLoader.open("GET", `https://theme-park-cfa10.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=5`);
        fantasyLoader.send();
        fantasyLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillFantasyArray(data);
            resolve(fantasyArray);

        });
    });
};

module.exports = fantasyObject;