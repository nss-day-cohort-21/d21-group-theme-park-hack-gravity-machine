"use strict";
console.log("Names Loader");

//require for any needed files
let Handlebars = require('hbsfy/runtime'),
    areaAquire = require('./loader.js'),
    attracAquire = require('./attracLoader.js'),
    attracTypeAquire = require('./attracTypesLoader.js');



//array inwhich all data objects will be stored
let parkDataArray = [];

// Area Promise
areaAquire.loadAreaArray()

.then(
    (loadAreaResolve) => {
        console.log("Area Promise", loadAreaResolve);
        //iterate over area data
        $.each(loadAreaResolve, function(index, value) {
            let areasObject = {};
            //get object names
            areasObject.name = $(this).attr('name');
            // console.log(areaName);
            //get object description
            areasObject.description = $(this).attr('description');
            //get object is
            areasObject.id = $(this).attr('id');
            //push area data to array
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
        //iterate over attraction data
        $.each(loadAttractResolve, function(index, value) {
            let attractObject = {};
            //get name data
            attractObject.name = $(this).attr('name');
            // console.log(areaName);
            // get description data
            attractObject.description = $(this).attr('description');
            //get times data
            attractObject.times = $(this).attr('times');
            //get type_id data
            attractObject.type_id = $(this).attr('type_id');
            //push attraction data to array
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
        //iterate over attraction type data
        $.each(loadAttracTypesResolve, function(index, value) {
            let attractTypeObject = {};
            //get name data
            attractTypeObject.name = $(this).attr('name');
            //get id data
            attractTypeObject.id = $(this).attr('id');
            //push dat to array
            parkDataArray.push(attractTypeObject);

        });

    },
    (reject) => {
        console.log("Something went wrong");
    });

console.log("Searchable Array", parkDataArray);



//function to export the array as returned data
function getParkArray() {
    return parkDataArray;
}
//export array
module.exports = { getParkArray };