"use strict";
console.log("main.js");

let Handlebars = require('hbsfy/runtime'),
    // areaAquire = require('./areasLoader.js'),
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
    eventsTemplate = require('../templates/attraction-specialEach.hbs'),
    momentTimeAquire = require('./momentTime.js'),
    hoursTemplate = require('../templates/hoursTemplate.hbs');


// ********************************
//			AREAS
// ********************************
// function toggleAreas() {
// function areasToPage(stuff) {
//     $("#leftMenu").append('<div id="testRemove">' + areaTemplate(stuff) + '</div>');
// }
// Area Promise
// areaAquire.loadAreaArray()

// .then(

//     (loadAreaResolve) => {
//         console.log("Area Promise", loadAreaResolve);
//         // areasToPage(loadAreaResolve);
//     },
//     (reject) => {
//         console.log("Something went wrong");
//     });
// }
// toggleAreas();
// function toggleOn() {
//   $("#map-closeup").toggleClass("pinsMainfullOn");  
// }
// function toggleOff() {
//   $("#map-closeup").toggleClass("pinsMainfullOff");  
// }
// ************************
//      FlipDown
// ************************
 $(document).ready(function(){
    $(".slideDown").click(function(){
        $('.slideDown').parent().next(".description").slideToggle("slow");
     });
});

// ********************************
//			Rides
// ********************************
function toggleRides() {
    function ridesToPage(stuff) {
        $("#leftMenu").append('<div id="rideRemove">' + ridesTemplate(stuff) + '</div>');

    }
        function toggleOn() {
      $("#map-closeup").toggleClass("pinsMainfullOn");  
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
    characterAquire.loadcharacterArray()

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

//********************************
//Times
//********************************* 


function timesToPage(stuff) {
    // $("#leftMenu").append('<div id="rideRemove">' + timesTemplate(stuff) + '</div>');

}
// Attraction Promise

timeAquire.loadtimeArray(5)

.then(

    (loadtimeResolve) => {
        console.log("working on times data", loadtimeResolve);
        timesToPage(loadtimeResolve);
        timeAquire.loadtimeArray(8)
            .then((resolve) => {
                console.log("resolve log", resolve);
                timesToPage(resolve);
            });

    },
    (reject) => {
        console.log("Something went wrong");
    });

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

// console.log("Test Attraction Load", attracAquire.loadAttractionsArray);
//************************
// 		Fuzzy Search
//************************
// let submitBtn = document.getElementById("basic-addon1");
// let inputArea = document.getElementById("input");

// function searchToPage(stuff) {
//         $("#leftMenu").append('<div class="searchFind">' + eventsTemplate(stuff) + '</div>');

//     }

//Button event listener
// submitBtn.addEventListener("click", submit);

//Makes button pull input value
// This Works
// function submit() {
//     event.preventDefault();
//     var userInput = inputArea.value;
//     console.log("user input: ", userInput);

// }

//makes enter key pull input value
//This works
// $("input").on("keyup", function search(e) {
//     if (e.keyCode == 13) {
//         //stops form submit button from refreshing page by default
//         event.preventDefault();
//         var userInput = $(this).val();

//     }
// });



// attracAquire.loadAttractionsArray()
// .then(

//     (loadAttracResolve) => {
//         console.log("Does this load", loadAttracResolve);
//         let searchInput = $("#input").val();
//         	var options = {
//                 tokenize: true,
// 			  shouldSort: true,
// 			  threshold: 0.6,
// 			  location: 0,
// 			  distance: 100,
// 			  maxPatternLength: 32,
// 			  minMatchCharLength: 1,
// 			  keys: ["name"]};
// 			const fuse = new Fuse(loadAttracResolve, options);
// 			var result = fuse.search(searchInput);
//             searchToPage(result);
//             console.log("result", result);
//         result = [];
//     },
 

        
//     (reject) => {
//         console.log("Something went wrong");
//     });




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



