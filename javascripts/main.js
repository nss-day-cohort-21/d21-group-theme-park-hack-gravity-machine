"use strict";
console.log("Main.js");

let Handlebars = require('hbsfy/runtime'),
	areaAquire = require('./loader.js'),
	attracAquire = require('./attracLoader.js'),
	attracTypeAquire = require('./attracTypesLoader.js');
	// parkInfoAquire = require('');

// Area Promise
areaAquire.loadAreaArray()
.then(
	(loadAreaResolve) => {
		console.log("Area Promise", loadAreaResolve);
		// areaToPage(loadAreaResolve);
	},
	(reject) => {
		console.log("Something went wrong");
	});


//Attraction Promise

attracAquire.loadAttractionsArray()
.then(
	(loadAttractResolve) => {
		console.log("Attraction Promise", loadAttractResolve);
		// areaToPage(loadAreaResolve);
	},
	(reject) => {
		console.log("Something went wrong");
	});

//Attraction Types Promise

attracTypeAquire.loadAttracTypesArray()
.then(
	(loadAttracTypesResolve) => {
		console.log("Attraction Type Promise", loadAttracTypesResolve);
		// areaToPage(loadAreaResolve);
	},
	(reject) => {
		console.log("Something went wrong");
	});

//Current Time

function formatTime(TIME) {
  let hours = TIME.getHours();
  let minutes = TIME.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let time = hours + ':' + minutes + ' ' + ampm;
  return time;
}
let dateTime = new Date();
let fullTime = formatTime(dateTime);
let currentTime = document.getElementById("currentTime");
currentTime.innerHTML = fullTime;

//Current Date
var d = new Date();
var strDate = d.getFullYear() + " " + (d.getMonth()+1) + "/" + d.getDate();
let currentDate = document.getElementById("yearDate");
currentDate.innerHTML = strDate;


