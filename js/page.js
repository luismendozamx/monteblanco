$(document).ready( function(){

	//Main container screen height
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	sideMenuWidth = $('#side-menu').width();

	//$('#side-menu-container').width( ($('#page-content').width())/3 );
	
});

$(document).on('scroll', function(){

	if( $('#side-menu').hasClass('isStuck') ){
		//$('#side-menu').width( (($('#page-content').width())/3) - 30 );
	}else{
		//$('#side-menu').width( sideMenuWidth );
	}

});