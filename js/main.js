$(document).ready( function(){

	//Main container screen height
	var windowHeight = $(window).height();

	//Make Full-Screen and adjust element pposition
	$("#slider").css("margin-top", (windowHeight/2)-120 + "px");
	$("#nav-and-slider").height(windowHeight-20);
	$("#secciones-home").css("margin-top", "0px");
	$('#scroll-down').css("margin-top", (windowHeight/2)-90 + "px");
	$("#fixed-background").height(windowHeight);

	//Start Slideshow
	$("#fixed-background").backstretch([
		"img/home-2.jpg",
		"img/home-3.jpg"
		], {duration: 4000, fade: 750} );

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
	var windowHeight = $(window).height();

	//Make Full-Screen and adjust element pposition
	$("#slider").css("margin-top", (windowHeight/2)-120 + "px");
	$("#nav-and-slider").height(windowHeight-20);
	$("#secciones-home").css("margin-top", "0px");
	$('#scroll-down').css("margin-top", (windowHeight/2)-90 + "px");
	$("#fixed-background").height(windowHeight);
});