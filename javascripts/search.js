"use strict";

console.log("search.js");


// let Handlebars = require('hbsfy/runtime'),
//     areaAquire = require('./loader.js'),
//     attracAquire = require('./attracLoader.js');

//Get button and input area from DOM
let submitBtn = document.getElementById("basic-addon1");
let inputArea = document.getElementById("input");

//Button event listener
submitBtn.addEventListener("click", submit);

//Makes button pull input value
// This Works
function submit() {
    event.preventDefault();
    var userInput = inputArea.value;
    console.log("user input: ", userInput);

}

//makes enter key pull input value
//This works
$("input").on("keydown", function search(e) {
    if (e.keyCode == 13) {
        //stops form submit button from refreshing page by default
        event.preventDefault();
        console.log("user input:", $(this).val());
    }
});


//WIP-not sure where this is at
$("#data-panel").append(inputSearch());

function populateSearchResults(stuff) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = inputSearch(stuff);
    $("#search-results").append(newDiv);
    console.log();
}


function inputSearch() {

}