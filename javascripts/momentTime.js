"use strict";

let Handlebars = require('hbsfy/runtime'),
    timeAquire = require('./timeLoader.js'),
    timesTemplate = require('../templates/times.hbs');

//get time loader data


let eventTimes = timeAquire.gettimeArray();

console.log("event time array now", eventTimes);

var moment = require('moment');


var now = moment().format();
var eventsAtThisTime = [];

for (i = 0; i < eventTimes.length; i++) {
    eventsAtThisTime.push(Math.abs(now - eventTimes[i]));
}

var i = eventsAtThisTime.indexOf(Math.min.apply(Math, eventsAtThisTime));
console.log("current time vs current event", eventTimes[i]);