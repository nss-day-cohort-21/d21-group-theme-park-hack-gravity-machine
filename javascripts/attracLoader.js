"use strict";

let attractionsArray = [];
let attractionsObject = {};

var fillAttractionsArray = (data) => {
  data.attractions.forEach(function(element){
    attractionsArray.push(element);
  });
};

attractionsObject.getAttractionsArray = () => {
	return attractionsArray;
};

attractionsObject.loadAttractionsArray =  () => {
  return new Promise( function (resolve, reject) {
    var attractionsLoader = new XMLHttpRequest();
    attractionsLoader.open("GET", "https://theme-park-cfa10.firebaseio.com/theme-park.json");
    attractionsLoader.send();

    attractionsLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = attractionsObject;