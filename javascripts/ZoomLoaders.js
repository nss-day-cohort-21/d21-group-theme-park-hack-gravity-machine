'use strict';
console.log("ZoomLoader");

let mainStreetAquire = require('./mainStreetLoader'),
    frontierAquire = require('./frontierLoader.js'),
    adventureAquire = require('./adventurelandLoader.js'),
    libertyAquire = require('./libertyLoader.js'),
    fantasyAquire = require('./fantasyLoader.js'),
    tomorrowAquire = require('./tomorrowLoader.js'),
    cinderellaAquire = require('./cindyLoader.js'),
    cindyTemplate = require('../templates/zoom-cindy.hbs'),
    tomTemplate = require('../templates/zoom-tom.hbs'),
    fantTemplate = require('../templates/zoom-fant.hbs'),
    libTemplate = require('../templates/zoom-lib.hbs'),
    advenTemplate = require('../templates/zoom-advent.hbs'),
    frontTemplate = require('../templates/zoom-front.hbs'),
    mainTemplate = require('../templates/zoom-main.hbs');

// ********************************
//			cinderellaAquire
// ********************************
function toggleCindy() {
    function cindyToPage(stuff) {
        $("#leftMenu").append('<div id="cindyRemove">' + cindyTemplate(stuff) + '</div>');

    }
 
    // Attraction Promise
    cinderellaAquire.loadCindyArray()

    .then(

        (loadCindyResolve) => {
            cindyToPage(loadCindyResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}
// ********************************
//          tomorrowAquire
// ********************************
function toggleTomorrow() {
    function tomToPage(stuff) {
        $("#leftMenu").append('<div id="tomRemove">' + tomTemplate(stuff) + '</div>');

    }
        function toggleOn() {
      $("#map-closeup").toggleClass("pinsMainfullOn");  
    }
    // Attraction Promise
    tomorrowAquire.loadTomorrowArray()

    .then(

        (loadTomeResolve) => {
            tomToPage(loadTomeResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}
// ********************************
//          fantasyAquire
// ********************************
function toggleFantasy() {
    function fantToPage(stuff) {
        $("#leftMenu").append('<div id="fantRemove">' + fantTemplate(stuff) + '</div>');

    }
        function toggleOn() {
      $("#map-closeup").toggleClass("pinsMainfullOn");  
    }
    // Attraction Promise
    fantasyAquire.loadFantasyArray()

    .then(

        (loadFantResolve) => {
            fantToPage(loadFantResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}
// ********************************
//          libertyAquire
// ********************************
function toggleLiberty() {
    function libToPage(stuff) {
        $("#leftMenu").append('<div id="libRemove">' + libTemplate(stuff) + '</div>');

    }
        function toggleOn() {
      $("#map-closeup").toggleClass("pinsMainfullOn");  
    }
    // Attraction Promise
    libertyAquire.loadLibertyArray()

    .then(

        (loadLibResolve) => {
            libToPage(loadLibResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}
// ********************************
//          adventureAquire
// ********************************
function toggleAdventure() {
    function advenToPage(stuff) {
        $("#leftMenu").append('<div id="advenRemove">' + advenTemplate(stuff) + '</div>');

    }
        function toggleOn() {
      $("#map-closeup").toggleClass("pinsMainfullOn");  
    }
    // Attraction Promise
    adventureAquire.loadAdventureArray()

    .then(

        (loadAdvenResolve) => {
            advenToPage(loadAdvenResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}
// ********************************
//          frontierAquire
// ********************************
function toggleFronier() {
    function frontToPage(stuff) {
        $("#leftMenu").append('<div id="frontRemove">' + frontTemplate(stuff) + '</div>');

    }
        function toggleOn() {
      $("#map-closeup").toggleClass("pinsMainfullOn");  
    }
    // Attraction Promise
    frontierAquire.loadFrontierArray()

    .then(

        (loadFrontResolve) => {
            frontToPage(loadFrontResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}
// ********************************
//          mainStreetAquire
// ********************************
function toggleMainst() {
    function mainToPage(stuff) {
        $("#leftMenu").append('<div id="mainRemove">' + mainTemplate(stuff) + '</div>');

    }
    // Attraction Promise
    mainStreetAquire.loadMainStreetArray()

    .then(

        (loadMainResolve) => {
            mainToPage(loadMainResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });
}