$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();

	$('.include').each(function(){
		$(this).load( $(this).data('include') );
	})

	$('#semestres').on('click', '.semestre:not(.block):not(.active)', function(){
		$('.semestre.active').removeClass('active m6').addClass('m2')
		$(this).removeClass('m2').addClass('active m6')
	});

	/*$('.semestre').each(function(i){
		$(this).prepend( $('<span />',{'text':'SEMESTRE'}) )
	})*/
});