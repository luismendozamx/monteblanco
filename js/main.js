$(document).ready( function(){

	//Main container screen height
	var windowHeight = $(window).height();
	$("#secciones-home").css("margin-top", (windowHeight*.8) + "px");
	$("#fixed-background").height(windowHeight);
});