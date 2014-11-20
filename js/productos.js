$(document).ready( function(){

	$('#todos-frescos').click( function(){
		$('#frescos-nav').addClass('active');
		$('#todos-nav').removeClass('active');
	} );

	$('#todos-empacados').click( function(){
		$('#empacados-nav').addClass('active');
		$('#todos-nav').removeClass('active');
	} );

	$('.sub-menu').click( function(){
		var i = 0;
	});


} );