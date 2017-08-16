// "use strict";

// let parkInfoArray = [];
// let parkInfoObject = {};

// var fillParkInfoArray = (data) => {
//   data.park-info.forEach(function(element){
//     parkInfoArray.push(element);
//   });
// };

// parkInfoObject.getParkInfoArray = () => {
// 	return parkInfoArray;
// };

// parkInfoObject.loadParkInfoArray =  () => {
//   return new Promise( function (resolve, reject) {
//     var parkInfoLoader = new XMLHttpRequest();
//     parkInfoLoader.open("GET", "theme-park.json");
//     parkInfoLoader.send();

//     parkInfoLoader.addEventListener("load", function() {
//       var data = JSON.parse(this.responseText).park-info;
//       resolve(data); // No longer responsible for calling populatePage function
//     });
//   });
// };

// module.exports = parkInfoObject;