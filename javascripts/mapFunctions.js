"use strict";
console.log("mapfunction");

// let Handlebars = require('hbsfy/runtime');
// let zoomAquire = require('./ZoomLoaders.js');



$(document).ready(function(){
	console.log( "ready! To Rock" );
	//mainstreet Full Map MouseEvents
		$(".ro-map-mainStreet").mouseover(function(){
    	$(".ro-map-mainStreet").css("opacity", "1");
	});
		$(".ro-map-mainStreet").mouseout(function(){
    	$(".ro-map-mainStreet").css("opacity", "0");
    	
	});
		$(".ro-map-mainStreet").mouseup(function(){
			// zoomAquire.toggleMainst();
			// $("#map-closeup").append("<div id='cUpId' class='mapCloseupMainSt' width='900' height='663'></div>");
			// $("#map-closeup").append('<button class="backArrow">BACK</button>');
			// $(".ro-map").css('visibility','hidden');
		});

		//Adventureland Full Map MouseEvents
		$(".ro-map-adventureland").mouseover(function(){
    	$(".ro-map-adventureland").css("opacity", "1");
	});
		$(".ro-map-adventureland").mouseout(function(){
    	$(".ro-map-adventureland").css("opacity", "0");
	});
		$(".ro-map-adventureland").mouseup(function(){
			// zoomAquire.toggleAdventure();
		// 	$("#map-closeup").append("<div class='mapCloseupAdventure' width='900' height='663'></div>");
		// 	$(".ro-map").css('visibility','hidden');
		});


		//Frontierland Full Map MouseEvents
		$(".ro-map-frontierland").mouseover(function(){
    	$(".ro-map-frontierland").css("opacity", "1");
	});
		$(".ro-map-frontierland").mouseout(function(){
    	$(".ro-map-frontierland").css("opacity", "0");
	});
		$(".ro-map-frontierland").mouseup(function(){
			// zoomAquire.toggleFronier();
		// 	$("#map-closeup").append("<div class='mapCloseupFront' width='900' height='663'></div>");
		// 	$(".ro-map").css('visibility','hidden');
		});


		//Liberty Full Map MouseEvents
		$(".ro-map-liberty").mouseover(function(){
    	$(".ro-map-liberty").css("opacity", "1");
	});
		$(".ro-map-liberty").mouseout(function(){
    	$(".ro-map-liberty").css("opacity", "0");
	});
		$(".ro-map-liberty").mouseup(function(){
			// zoomAquire.toggleLiberty();
			// $("#map-closeup").append("<div class='mapCloseupLiberty' width='900' height='663'></div>");
			// $(".ro-map").css('visibility','hidden');
		});


		//Fantastyland Full Map MouseEvents
		$(".ro-map-fantasyland").mouseover(function(){
    	$(".ro-map-fantasyland").css("opacity", "1");
	});
		$(".ro-map-fantasyland").mouseout(function(){
    	$(".ro-map-fantasyland").css("opacity", "0");
	});
		$(".ro-map-fantasyland").mouseup(function(){
			// zoomAquire.toggleFantasy();
			// $("#map-closeup").append("<div class='mapCloseupFantasy' width='900' height='663'></div>");
			// $(".ro-map").css('visibility','hidden');
		});


		//Tomorrowland Full Map MouseEvents
		$(".ro-map-tomorrowland").mouseover(function(){
    	$(".ro-map-tomorrowland").css("opacity", "1");
	});
		$(".ro-map-tomorrowland").mouseout(function(){
    	$(".ro-map-tomorrowland").css("opacity", "0");
	});
		$(".ro-map-tomorrowland").mouseup(function(){
			// zoomAquire.toggleTomorrow();
			// $("#map-closeup").append("<div class='mapCloseupTomorrow' width='900' height='663'></div>");
			// $(".ro-map").css('visibility','hidden');
		});

		//Castle Full Map MouseEvents
		$(".ro-map-castle").mouseover(function(){
    	$(".ro-map-castle").css("opacity", "1");
	});
		$(".ro-map-castle").mouseout(function(){
    	$(".ro-map-castle").css("opacity", "0");
	});
		$(".ro-map-castle").mouseup(function(){
			// zoomAquire. toggleCindy();
			// $("#map-closeup").append("<div class='mapCloseupCastle' width='900' height='663'></div>");
			// $(".ro-map").css('visibility','hidden');
		});
});
