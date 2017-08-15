"use strict";
let attracTypesArray = [];
let attracTypesObject = {};

function fillAttracTypesArray (data) {
    let keys = Object.keys(data);
    keys.forEach((item)=> {
      console.log("keys", keys);
      data[item].firebaseID = item;
      attracTypesArray.push(data[item]);
  });
      console.log("attracTypesArray:", attracTypesArray);
}


attracTypesObject.getAttracTypesArray = () => {
	return attracTypesArray;
};

attracTypesObject.loadAttracTypesArray =  () => {
  return new Promise( function (resolve, reject) {
    var attracTypesLoader = new XMLHttpRequest();
    attracTypesLoader.open("GET", "https://theme-park-cfa10.firebaseio.com/theme-park.json");
    attracTypesLoader.send();

    attracTypesLoader.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = attracTypesObject;