"use strict";
console.log("Names Loader");

let Handlebars = require('hbsfy/runtime'),
    areaAquire = require('./loader.js'),
    attracAquire = require('./attracLoader.js');



let namesArray = [];


// Area Promise
areaAquire.loadAreaArray()

.then(
    (loadAreaResolve) => {
        console.log("Area Promise", loadAreaResolve);
        $.each(loadAreaResolve, function(index, value) {
            let areaName = $(this).attr('name');
            // console.log(areaName);
            namesArray.push(areaName);
            let areaDescription = $(this).attr('description');
            namesArray.push(areaDescription);


        });
        console.log("Names Array with names & descriptions added", namesArray);

    },
    (reject) => {
        console.log("Something went wrong");
    });




//Attraction Promise

// attracAquire.loadAttractionsArray()
//     .then(
//         (loadAttractResolve) => {
//             console.log("Attraction Promise", loadAttractResolve);
//             $.each(loadAttractResolve, function(index, name) {
//                 console.log($(this).attr('name'));
//                 // areaToPage(loadAreaResolve);
//             });
//         },
//         (reject) => {
//             console.log("Something went wrong");
//         });