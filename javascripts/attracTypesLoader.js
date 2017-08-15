"use strict";
let attracTypesArray = [];
let attracTypesObject = {};

var fillAttracTypesArray = (data) => {
  data.attraction_types.forEach(function(element){
    attracTypesArray.push(element);
  });
};

attracTypesObject.getAttracTypesArray = () => {
	return attracTypesArray;
};

attracTypesObject.loadAttracTypesArray =  () => {
  return new Promise( function (resolve, reject) {
    var attracTypesLoader = new XMLHttpRequest();
    attracTypesLoader.open("GET", "theme-park.json");
    attracTypesLoader.send();

    attracTypesLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText).attraction_types;
      resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = attracTypesObject;