"use strict";

let attractionsArray = [];
let attractionsObject = {};

function fillAttractionsArray (data) {
    let keys = Object.keys(data);
    keys.forEach((item)=> {
      data[item].firebaseID = item;
      attractionsArray.push(data[item]);
  });
      console.log("attracTypesArray:", attractionsArray);
}

attractionsObject.getAttractionsArray = () => {
	return attractionsArray;
};

attractionsObject.loadAttractionsArray =  () => {
  return new Promise( function (resolve, reject) {
    var attractionsLoader = new XMLHttpRequest();
    attractionsLoader.open("GET", "https://theme-park-cfa10.firebaseio.com/attractions.json");
    attractionsLoader.send();
    attractionsLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      resolve(data);
    });
  });
};

module.exports = attractionsObject;