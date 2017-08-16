"use strict";


console.log('checkboxes code ON');

//Show/hide list of attractions by type, when checkboxes are clicked:  

$("input[name='Ride']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
        attracTypeAquire.loadAttracTypesArray();
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Food']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Show']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Vendor']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Character']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Animals']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Game']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});

$("input[name='Special']").change(function() {
    if (this.checked === true) {
        // $("#leftPanel").append(attracTemplate);
        console.log("this", this);
    } else {
        // $("#leftPanel").remove(attracTemplate);
    }
});


// var leftPanel = document.getElementsByID("leftPanel");

//////////////////////////////////////////////////////////////////////////////////////////

//TESTING
//Listening for any checkboxes checked:

// var checkboxes = document.querySelectorAll('input[type=checkbox]'),
//     checkboxArray = Array.from(checkboxes);

// function confirmCheck() {
//     if (this.checked) {
//         console.log('checked');
//     }
// }

// checkboxArray.forEach(function(checkbox) {
//     checkbox.addEventListener('change', confirmCheck);
// });
///////////////////////////////////////////////////////////////////////////////

//Function to filter and output the displayed attractions list (left column on page) and .toggle display on the map, by each category: