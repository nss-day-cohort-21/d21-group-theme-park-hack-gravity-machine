"use strict";

console.log("attraction times dropdown functions!");

//When page loads, then events list from current time to one hour past.
//When page loads, then events list in left 30% of screen.


var btn9am = document.getElementById("9am").addEventListener("click", nineAM);
var btn10am = document.getElementById("10am").addEventListener("click", tenAM);
var btn11am = document.getElementById("11am").addEventListener("click", elevenAM);
var btn12pm = document.getElementById("12pm").addEventListener("click", twelvePM);
var btn1pm = document.getElementById("1pm").addEventListener("click", onePM);
var btn2pm = document.getElementById("2pm").addEventListener("click", twoPM);
var btn3pm = document.getElementById("3pm").addEventListener("click", threePM);
var btn4pm = document.getElementById("4pm").addEventListener("click", fourPM);
var btn5pm = document.getElementById("5pm").addEventListener("click", fivePM);
var btn6pm = document.getElementById("6pm").addEventListener("click", sixPM);
var btn7pm = document.getElementById("7pm").addEventListener("click", sevenPM);
var btn8pm = document.getElementById("8pm").addEventListener("click", eightPM);
var btn9pm = document.getElementById("9pm").addEventListener("click", ninePM);

//Link up each hour in the dropdown to filter the events by time 

// $('#hourDropdown').on('show.bs.dropdown', function() {
//     $("btn9am").onselect
// });

function nineAM() {
    $("#leftMenu").append(`<p class="nowShowing"> Today's events from 9:00am to 10:00am  </p>`);
    console.log("9am picked", nineAM);
}

function toggleHourevents() {
    function hoursToPage(stuff) {
        $("#leftMenu").append('<div id="">' + hoursTemplate(stuff) + '</div>');

    }
    // Attraction Promise
    attracAquire.loadAttractionsArray()

    .then(

        (loadAttracResolve) => {
            hoursToPage(loadAttracResolve);

        },
        (reject) => {
            console.log("Something went wrong");
        });
}

//on load, let the hour at the anchor element equal the hh of the timestamp: 

function formatTime(TIME) {
    let hours = TIME.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let time = "Now Showing " + hours + ":00" + ampm;
    return time;
    console.log('show time:', time);
}

let dateTime = new Date();
let fullTime = formatTime(dateTime);

let loadHour = document.getElementById("hourDropdown");
loadHour.innerHTML = fullTime;
console.log('show fullTime:', fullTime);
/////////////////////////////////////////////////////////////////////////////