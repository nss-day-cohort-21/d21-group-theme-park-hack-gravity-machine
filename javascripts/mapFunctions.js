"use strict";
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
			
		});


		//Adventureland Full Map MouseEvents
		$(".ro-map-adventureland").mouseover(function(){
    	$(".ro-map-adventureland").css("opacity", "1");
	});
		$(".ro-map-adventureland").mouseout(function(){
    	$(".ro-map-adventureland").css("opacity", "0");
	});
		$(".ro-map-adventureland").mouseup(function(){
			console.log("Clicked");
		});


		//Frontierland Full Map MouseEvents
		$(".ro-map-frontierland").mouseover(function(){
    	$(".ro-map-frontierland").css("opacity", "1");
	});
		$(".ro-map-frontierland").mouseout(function(){
    	$(".ro-map-frontierland").css("opacity", "0");
	});
		$(".ro-map-frontierland").mouseup(function(){
			$("#map-closeup").append("<div class='mapCloseupFront' width='900' height='663'></div>");
		});


		//Liberty Full Map MouseEvents
		$(".ro-map-liberty").mouseover(function(){
    	$(".ro-map-liberty").css("opacity", "1");
	});
		$(".ro-map-liberty").mouseout(function(){
    	$(".ro-map-liberty").css("opacity", "0");
	});
		$(".ro-map-liberty").mouseup(function(){
			console.log("Clicked");
		});


		//Fantastyland Full Map MouseEvents
		$(".ro-map-fantasyland").mouseover(function(){
    	$(".ro-map-fantasyland").css("opacity", "1");
	});
		$(".ro-map-fantasyland").mouseout(function(){
    	$(".ro-map-fantasyland").css("opacity", "0");
	});
		$(".ro-map-fantasyland").mouseup(function(){
			console.log("Clicked");
		});


		//Tomorrowland Full Map MouseEvents
		$(".ro-map-tomorrowland").mouseover(function(){
    	$(".ro-map-tomorrowland").css("opacity", "1");
	});
		$(".ro-map-tomorrowland").mouseout(function(){
    	$(".ro-map-tomorrowland").css("opacity", "0");
	});
		$(".ro-map-tomorrowland").mouseup(function(){
			console.log("Clicked");
		});


		//Castle Full Map MouseEvents
		$(".ro-map-castle").mouseover(function(){
    	$(".ro-map-castle").css("opacity", "1");
	});
		$(".ro-map-castle").mouseout(function(){
    	$(".ro-map-castle").css("opacity", "0");
	});
		$(".ro-map-castle").mouseup(function(){
			console.log("Clicked");
		});
});
