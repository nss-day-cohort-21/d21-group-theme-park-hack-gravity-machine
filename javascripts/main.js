"use strict";
console.log("main.js");

let Handlebars = require('hbsfy/runtime'),
	areaAquire = require('./areasLoader.js'),
	attracAquire = require('./attracLoader.js'),
	attracTypeAquire = require('./typesLoader.js'),
	areaTemplate = require('../templates/areas-grid.hbs'),
	ridesTemplate = require('../templates/attraction-ridesEach.hbs'),
	foodTemplate = require('../templates/attraction-foodEach.hbs'),
	showTemplate = require('../templates/attraction-showEach.hbs'),
	vendorTemplate = require('../templates/attraction-vendoEach.hbs'),
	characterTemplate = require('../templates/attraction-characterEach.hbs'),
	animalsTemplate = require('../templates/attraction-animalsEach.hbs'),
	gameTemplate = require('../templates/attraction-gameEach.hbs'),
	eventsTemplate = require('../templates/attraction-specialEach.hbs'),
	fuseSearch = require('fuse.js/dist/fuse.js'),
    spEventsAquire = require('./spEventLoader.js'),
    gamesAquire = require('./gameLoader.js'),
    animalsAquire = require('./animalsLoader.js');


// ********************************
//			AREAS
// ********************************
// function toggleAreas() {
// function areasToPage(stuff) {
//     $("#leftMenu").append('<div id="testRemove">' + areaTemplate(stuff) + '</div>');
// }
// Area Promise
areaAquire.loadAreaArray()

.then(

    (loadAreaResolve) => {
    	    console.log("Area Promise", loadAreaResolve);
			// areasToPage(loadAreaResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });
// }
// toggleAreas();
// ********************************
//			Rides
// ********************************
function toggleRides() {
function ridesToPage(stuff) {
    $("#leftMenu").append('<div id="rideRemove">' + ridesTemplate(stuff) + '</div>');

}
// Attraction Promise
attracAquire.loadAttractionsArray()

.then(

    (loadAttracResolve) => {
        	ridesToPage(loadAttracResolve);
        	console.log("Attraction Promise", loadAttracResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });
}

// ********************************
//			Food
// ********************************
function toggleFood() {
function foodToPage(stuff) {
    $("#leftMenu").append('<div id="foodRemove">' + foodTemplate(stuff) + '</div>');

}
// Attraction Promise
attracAquire.loadAttractionsArray()

.then(

    (loadAttracResolve) => {
        	foodToPage(loadAttracResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });
}
// // ********************************
// //			Shows
// // ********************************
function toggleShows() {
function showToPage(stuff) {
    $("#leftMenu").append('<div id="showRemove">' + showTemplate(stuff) + '</div>');

}
// Attraction Promise
attracAquire.loadAttractionsArray()

.then(

    (loadAttracResolve) => {
        	showToPage(loadAttracResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });
}

// // ********************************
// //			Vendor
// // ********************************
function toggleVendor() {
function vendorToPage(stuff) {
    $("#leftMenu").append('<div id="vendRemove">' + vendorTemplate(stuff) + '</div>');

}
// Attraction Promise
attracAquire.loadAttractionsArray()

.then(

    (loadAttracResolve) => {
        	vendorToPage(loadAttracResolve);

    },
    (reject) => {
        console.log("Something went wrong");
    });
}


// // ********************************
// //			Characters
// // ********************************
function toggleChar() {
function characterToPage(stuff) {
    $("#leftMenu").append('<div id="charRemove">' + characterTemplate(stuff) + '</div>');

}
// Attraction Promise
attracAquire.loadAttractionsArray()

.then(

    (loadAttracResolve) => {
        	characterToPage(loadAttracResolve);

    },
    (reject) => {
        console.log("Something went wrong");
    });
}


// // ********************************
// //			animals
// // ********************************
function toggleAnimals() {
function animalsToPage(stuff) {
    $("#leftMenu").append('<div id="animRemove">' + animalsTemplate(stuff) + '</div>');

}
// Attraction Promise
animalsAquire.loadAnimalsArray()

.then(

    (loadAnimalsResolve) => {
        	animalsToPage(loadAnimalsResolve);

    },
    (reject) => {
        console.log("Something went wrong");
    });
}


// // ********************************
// //			Games
// // ********************************
function toggleGames() {
function gameToPage(stuff) {
    $("#leftMenu").append('<div id="gameRemove">' + gameTemplate(stuff) + '</div>');

}
// Attraction Promise
gamesAquire.loadGamesArray()

.then(

    (loadGamesResolve) => {
        	gameToPage(loadGamesResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });
}


// // ********************************
// //			Events
// // ********************************
function toggleEvent() {
function eventToPage(stuff) {
    $("#leftMenu").append('<div id="evenRemove">' + eventsTemplate(stuff) + '</div>');

}
// Attraction Promise
spEventsAquire.loadspecialEventsArray()

.then(

    (loadspecialEventsResolve) => {
        	eventToPage(loadspecialEventsResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });
}


// //Attraction Promise

// attracAquire.loadAttractionsArray()
//     .then(
//         (loadAttractResolve) => {
//             console.log("Attraction Promise", loadAttractResolve);
//         },
//         (reject) => {
//             console.log("Something went wrong");
//         });

//Attraction Types Promise

// attracTypeAquire.loadAttracTypesArray()

// .then(
//     (loadAttracTypesResolve) => {
//         console.log("Attraction Type Promise", loadAttracTypesResolve);
        
//     },
//     (reject) => {
//         console.log("Something went wrong");
//     });


//************************
//		Checkboxes
//************************

$('#chkRide').click(function(){
    if($(this).prop("checked") === true){
    	toggleRides();
    }
    else if($(this).prop("checked") === false){
        $('#rideRemove').remove();
    }
});
$('#chkFood').click(function(){
    if($(this).prop("checked") === true){
    	toggleFood();
    }
    else if($(this).prop("checked") === false){
        $('#foodRemove').remove();
    }
});
$('#chkShow').click(function(){
    if($(this).prop("checked") === true){
    	toggleShows();
    }
    else if($(this).prop("checked") === false){
        $('#showRemove').remove();
    }
});
$('#chkVend').click(function(){
    if($(this).prop("checked") === true){
    	toggleVendor();
    }
    else if($(this).prop("checked") === false){
        $('#vendRemove').remove();
    }
});
$('#chkChar').click(function(){
    if($(this).prop("checked") === true){
    	toggleChar();
    }
    else if($(this).prop("checked") === false){
        $('#charRemove').remove();
    }
});
$('#chkAnim').click(function(){
    if($(this).prop("checked") === true){
    	toggleAnimals();
    }
    else if($(this).prop("checked") === false){
        $('#animRemove').remove();
    }
});
$('#chkGame').click(function(){
    if($(this).prop("checked") === true){
    	toggleGames();
    }
    else if($(this).prop("checked") === false){
        $('#gameRemove').remove();
    }
});
$('#chkEvnt').click(function(){
    if($(this).prop("checked") === true){
    	toggleEvent();
    }
    else if($(this).prop("checked") === false){
        $('#evenRemove').remove();
    }
});

// console.log("Test Attraction Load", attracAquire.loadAttractionsArray);
//************************
// 		Fuzzy Search
//************************

// attracAquire.loadAttractionsArray()

// .then(

//     (loadAttracResolve) => {
//         	var options = {
// 			  shouldSort: true,
// 			  threshold: 0.6,
// 			  location: 0,
// 			  distance: 100,
// 			  maxPatternLength: 32,
// 			  minMatchCharLength: 1,
// 			  keys: ["name"]
// 			};
// 			var fuse = new Fuse(loadAttracResolve, options);
// 			var result = fuse.search("");
//     },
//     (reject) => {
//         console.log("Something went wrong");
//     });
// }



//************************
// 		Current Time
//************************


function formatTime(TIME) {
    let hours = TIME.getHours();
    let minutes = TIME.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let time = hours + ':' + minutes + ' ' + ampm;
    return time;
}
let dateTime = new Date();
let fullTime = formatTime(dateTime);
let currentTime = document.getElementById("currentTime");
currentTime.innerHTML = fullTime;

//Current Date
var d = new Date();
var strDate = d.getFullYear() + " " + (d.getMonth() + 1) + "/" + d.getDate();
let currentDate = document.getElementById("yearDate");
currentDate.innerHTML = strDate;