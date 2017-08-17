"use strict";
console.log("testFuzzy.js");

let attracAquire = require('./attractionsLoader.js');

function ridesToPage(stuff){
}

attracAquire.loadAttractionsArray()

.then(

    (loadAttracResolve) => {
        	ridesToPage(loadAttracResolve);
    },
    (reject) => {
        console.log("Something went wrong");
    });

// Store the titles in here
index = [];

function fuzzy_match(text, search)
{
    /*
    Text is a title, search is the user's search
    */
    // remove spaces, lower case the search so the search is case insensitive
    var search = search.replace(/\ /g, '').toLowerCase();
    var tokens = [];
    var search_position = 0;

    // Go through each character in the text
    for (var n=0; n<text.length; n++)
    {
        var text_char = text[n];
        // if we watch a character in the search, highlight it
        if(search_position < search.length && text_char.toLowerCase() == search[search_position])
        {
            text_char = '<b>' + text_char + '</b>';
            search_position += 1;
        }
        tokens.push(text_char);
    }
    // If are characters remaining in the search text, return an empty string to indicate no match
    if (search_position != search.length)
    {
        return '';
    }
    return tokens.join('');
}

function refresh_search()
{
    var search = $('input[name=search]').val();
    var results = [];

    /*
        Create an array of <li> tags containing matched titles
    */
    $.each(index, function(i, name){
        var result = fuzzy_match(name, search)
        if(result){
            results.push("<li>" + result + "</li>")
        }
    });

    var results_html = results.join('\n');
    $("ul.results").html(results_html);
}

$(function(){

    $('input[name=search]').keyup(function(){
        /*
        Refresh the search on every keypress in the search input
        */
        refresh_search();
    });

    /*
        Gets the firsbase json
    */
    $.getJSON(
        'https://theme-park-cfa10.firebaseio.com/attraction_types.json',
        function(result){
            index = [];
            $.each(result.data.children, function(i, link){
                index.push(link.data.name);
            });
            refresh_search();
        });

});
