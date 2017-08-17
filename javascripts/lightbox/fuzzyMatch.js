"use strict";

function fuzzyMatch(text, search) {
	// No spaces all Lowercase
	search = search.replace(/\ /g, '').toLowerCase();
	var tokens = text.split('');
	var searchPosition = 0;

$.each(tokens, function(i, textChar) {
	if(textChar.toLowerCase() == search[searchPosition]) {
		tokens[i] = '<strong>' + textChar + '</strong>';
		searchPosition++; //Cycling to the next character
		if (searchPosition >= search.length){
			return false;
		}
	}
});

if (searchPosition != search.length) {
	return '';
}
// converts strong text chars into string
return tokens.join('');
}
//Creates array of li tags with the matched search name
$.each(titles, function(i, title){
	if(result) {
		results.push('<li>' + result + '</li>')
	}
});

var resultsHTML = results.join('\n');
$("ul.results").html(results);


//search refresh on keypress
$(function(){
	refreshSearch();
	$('input[name=seach]').keyup(refreshSearch);
});