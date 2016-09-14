$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();

	$('.include').each(function(){
		$(this).load( $(this).data('include') );
	})
});