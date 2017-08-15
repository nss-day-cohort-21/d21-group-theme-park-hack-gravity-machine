"use strict";

console.log("loader.js");

let areaArray = [];
let areaObject = {};


var fillareaArray = (data) => {
  data.areas.forEach(function(element){
    areaArray.push(element);
  });
};


areaObject.getAreaArray = () => {
	return areaArray;
};

areaObject.loadAreaArray =  () => {
  return new Promise( function (resolve, reject) {
    var areaLoader = new XMLHttpRequest();
    areaLoader.open("GET", "theme-park.json");
    areaLoader.send();

    areaLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText).areas;
      resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = areaObject;

