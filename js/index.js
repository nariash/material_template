$(document).ready(function(){

	$('#semestres').on('click', '.semestre:not(.block):not(.active)', function(e){
		e.preventDefault();
		var semestre = $(this);
		$('.semestre.active').removeClass('active m6').addClass('m2')
		semestre.removeClass('m2').addClass('active m6')
		if ($(window).width() < 600) { console.log(semestre)
			$('html, body').animate({
				scrollTop: semestre.offset().top
			}, 1000);
			
			/*setTimeout(function(){
				semestre.ScrollTo();
			},300)*/
		}
	});



});

$(document).keydown(function(e) { });
$(document).keyup(function(e) { });
$(document.body).on('mousewheel', function(e){ });