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

// let attractionsArray = [];
// let attractionsObject = {};

// var fillAttractionsArray = (data) => {
//   data.attractions.forEach(function(element){
//     attractionsArray.push(element);
//   });
// };

// attractionsObject.getAttractionsArray = () => {
// 	return attractionsArray;
// };

// attractionsObject.loadAttractionsArray =  () => {
//   return new Promise( function (resolve, reject) {
//     var attractionsLoader = new XMLHttpRequest();
//     attractionsLoader.open("GET", "theme-park.json");
//     attractionsLoader.send();

//     attractionsLoader.addEventListener("load", function() {
//       var data = JSON.parse(this.responseText).attractions;
//       resolve(data); // No longer responsible for calling populatePage function
//     });
//   });
// };

// module.exports = attractionsObject;