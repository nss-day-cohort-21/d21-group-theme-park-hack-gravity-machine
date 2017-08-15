"use strict";

let submitBtn = document.getElementById("basic-addon1");
let inputArea = document.getElementById("input");


submitBtn.addEventListener("click", submit);

function submit() {
    event.preventDefault();
    var userInput = inputArea.value;
    console.log("user input: ", userInput);

}

$("input").on("keydown", function search(e) {
    if (e.keyCode == 13) {
        event.preventDefault();
        console.log($(this).val());
    }
});


function populateSearchResults(stuff) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = searchAquire(stuff);
    $("#search-results").append(newDiv);
}