"use strict";
console.log("Names Loader");

//require for any needed files
let Handlebars = require('hbsfy/runtime'),
    areaAquire = require('./loader.js'),
    attracAquire = require('./attracLoader.js'),
    attracTypeAquire = require('./attracTypesLoader.js');




let parkDataArray = [];

// Area Promise

areaAquire.loadAreaArray()

.then(
    (loadAreaResolve) => {
        console.log("Area Promise", loadAreaResolve);
        $.each(loadAreaResolve, function(index, value) {
            let areasObject = {};
            areasObject.name = $(this).attr('name');
            // console.log(areaName);
            areasObject.description = $(this).attr('description');
            areasObject.id = $(this).attr('id');

            parkDataArray.push(areasObject);
        });

    },
    (reject) => {
        console.log("Something went wrong");
    });

// console.log("String Search Array", parkDataArray);


/////////////////////////////////////////////////////

// Attraction Promise

attracAquire.loadAttractionsArray()

.then(
    (loadAttractResolve) => {
        console.log("Attraction Promise", loadAttractResolve);
        $.each(loadAttractResolve, function(index, value) {
            let attractObject = {};

            attractObject.name = $(this).attr('name');
            // console.log(areaName);
            attractObject.description = $(this).attr('description');
            attractObject.area_id = $(this).attr('area_id');
            attractObject.times = $(this).attr('times');
            attractObject.type_id = $(this).attr('type_id');

            parkDataArray.push(attractObject);
        });

        // console.log("attractions in array", parkDataArray);
    },
    (reject) => {
        console.log("Something went wrong");
    });



/////////////////////////////////////////////////////
//Attraction Type Promise

attracTypeAquire.loadAttracTypesArray()

.then(
    (loadAttracTypesResolve) => {
        console.log("Attraction Type Promise", loadAttracTypesResolve);
        $.each(loadAttracTypesResolve, function(index, value) {
            let attractTypeObject = {};

            attractTypeObject.name = $(this).attr('name');

            attractTypeObject.id = $(this).attr('id');

            parkDataArray.push(attractTypeObject);

        });

    },
    (reject) => {
        console.log("Something went wrong");
    });

console.log("Searchable Array", parkDataArray);

module.exports = [parkDataArray];