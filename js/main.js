$(document).ready( function(){

	//Adjust Object position and size.
	resizeObjects();

	//Start Slideshow
	if( $("#fixed-background") != undefined){
	  $("#fixed-background").backstretch([
	  "img/home-2.jpg",
	  "img/Fondo1.jpg"
	  ], {duration: 4000, fade: 750} );
	}

	//Slideshow controllers
	$("#prev").click( function(){
	  $("#fixed-background").backstretch("prev");
	});
	$("#next").click( function(){
	  $("#fixed-background").backstretch("next");
	});

	//Make Local Scroll
	$.localScroll();
	$('#slider').localScroll({ duration: 'slow', offset: 0});
});

$(window).resize(function(){
	//Adjust Object position and size.
	resizeObjects();
});

function resizeObjects(){
	//Main container screen height
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var aux;

	//Make Full-Screen and adjust element position
	if( windowWidth < 768 ){
		$("#nav-and-slider").height(windowHeight);
	}else{
		$("#nav-and-slider").height(windowHeight-20);
	}
	
	if( windowWidth > 800){
		$("#fixed-background").height(windowHeight);
		$("#slider").css("margin-top", (windowHeight/2)-120 + "px");
		aux = (windowHeight/2)-120;
	}else{
		$("#fixed-background").height(windowHeight);
		$("#slider").css("margin-top", "0px");
		aux = 0;
	}

	$("#secciones-home").css("margin-top", "0px");

	position = $('#main-nav').height() + 40 + aux + $("#slider").height() + $('#scroll-down').height();

	$('#scroll-down').css("margin-top", windowHeight - position + "px");
}