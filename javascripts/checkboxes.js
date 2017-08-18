"use strict";
console.log("checkbox.js");
let Handlebars = require('hbsfy/runtime'),
    areaAquire = require('./areasLoader.js'),
    timeAquire = require('./timeLoader.js'),
    vendorAquire = require('./vendorLoader.js'),
    characterAquire = require('./characterLoader.js'),
    foodAquire = require('./foodLoader.js'),
    rideAquire = require('./rideLoader.js'),
    showAquire = require('./showLoad.js'),
    spEventsAquire = require('./spEventLoader.js'),
    gamesAquire = require('./gameLoader.js'),
    animalsAquire = require('./animalsLoader.js'),
    attracAquire = require('./attracLoader.js'),
    attracTypeAquire = require('./typesLoader.js'),
    areaTemplate = require('../templates/areas-grid.hbs'),
    ridesTemplate = require('../templates/attraction-ridesEach.hbs'),
    foodTemplate = require('../templates/attraction-foodEach.hbs'),
    showTemplate = require('../templates/attraction-showEach.hbs'),
    vendorTemplate = require('../templates/attraction-vendoEach.hbs'),
    characterTemplate = require('../templates/attraction-characterEach.hbs'),
    timesTemplate = require('../templates/times.hbs'),
    animalsTemplate = require('../templates/attraction-animalsEach.hbs'),
    gameTemplate = require('../templates/attraction-gameEach.hbs'),
    eventsTemplate = require('../templates/attraction-specialEach.hbs');

function toggleOn() {
  $("#map-closeup").toggleClass("pinsMainfullOn");  
}
function toggleOff() {
  $("#map-closeup").toggleClass("pinsMainfullOff");  
}

// ********************************
//			Rides
// ********************************
function toggleRides() {
    function ridesToPage(stuff) {
        $("#leftMenu").append('<div id="rideRemove">' + ridesTemplate(stuff) + '</div>');

    }
    // Attraction Promise
    rideAquire.loadRideArray()

    .then(

        (loadRideResolve) => {
            ridesToPage(loadRideResolve);
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
    foodAquire.loadfoodArray()

    .then(

        (loadFoodResolve) => {
            foodToPage(loadFoodResolve);
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
    showAquire.loadshowArray()

    .then(

        (loadshowResolve) => {
            showToPage(loadshowResolve);
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
    vendorAquire.loadvendorArray()

    .then(

        (loadvendorResolve) => {
            vendorToPage(loadvendorResolve);

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

        (loadCharacterResolve) => {
            characterToPage(loadCharacterResolve);

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

//************************
//		Checkboxes
//************************

$('#chkRide').click(function() {
    if ($(this).prop("checked") === true) {
        toggleRides();
    } else if ($(this).prop("checked") === false) {
        $('#rideRemove').remove();
    }
});
$('#chkFood').click(function() {
    if ($(this).prop("checked") === true) {
        toggleFood();
    } else if ($(this).prop("checked") === false) {
        $('#foodRemove').remove();
        // toggleOff();
    }
});
$('#chkShow').click(function() {
    if ($(this).prop("checked") === true) {
        toggleShows();
        // toggleOn();
    } else if ($(this).prop("checked") === false) {
        $('#showRemove').remove();
        // toggleOff();
    }
});
$('#chkVend').click(function() {
    if ($(this).prop("checked") === true) {
        toggleVendor();
        // toggleOn();
    } else if ($(this).prop("checked") === false) {
        $('#vendRemove').remove();
        // toggleOff();
    }
});
$('#chkChar').click(function() {
    if ($(this).prop("checked") === true) {
        toggleChar();
        // toggleOn();
    } else if ($(this).prop("checked") === false) {
        $('#charRemove').remove();
        // toggleOff();
    }
});
$('#chkAnim').click(function() {
    if ($(this).prop("checked") === true) {
        toggleAnimals();
        // toggleOn();
    } else if ($(this).prop("checked") === false) {
        $('#animRemove').remove();
        // toggleOff();
    }
});
$('#chkGame').click(function() {
    if ($(this).prop("checked") === true) {
        toggleGames();
        // toggleOn();
    } else if ($(this).prop("checked") === false) {
        $('#gameRemove').remove();
        // toggleOff();
    }
});
$('#chkEvnt').click(function() {
    if ($(this).prop("checked") === true) {
        toggleEvent();
        // toggleOn();
    } else if ($(this).prop("checked") === false) {
        $('#evenRemove').remove();
        // toggleOff();
    }
});