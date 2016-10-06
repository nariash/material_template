var keyFlag, scrollFlag, zoomTarget, settings;
$(document).ready(function(){
	keyFlag = false, scrollFlag = false;
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();

	$('.tooltipped').tooltip({
		position: 'bottom',
		delay: 50,
		tooltip: $(this).attr('title')
	});

	$('.breadcrumb.short').each(function(){
		$(this).text( $(this).text().substring(0,50) + '...' )
	})

	$('.include').each(function(){
		$(this).load( $(this).data('include') );
	})

	settings = {
		// zoomed size relative to the container element
		// 0.0-1.0
		targetsize: 0.5,
		// scale content to screen based on their size
		// "width"|"height"|"both"
		scalemode: "both",
		// animation duration
		duration: 300,
		// easing of animation, similar to css transition params
		// "linear"|"ease"|"ease-in"|"ease-out"|"ease-in-out"|[p1,p2,p3,p4]
		// [p1,p2,p3,p4] refer to cubic-bezier curve params
		easing: "ease",
		// use browser native animation in webkit, provides faster and nicer
		// animations but on some older machines, the content that is zoomed
		// may show up as pixelated.
		nativeanimation: true,
		// root element to zoom relative to
		// (this element needs to be positioned)
		root: $(document.body),
		// show debug points in element corners. helps
		// at debugging when zoomooz positioning fails
		debug: false,
		// this function is called with the element that is zoomed to in this
		// when animation ends
		animationendcallback: null,
		// this specifies, that clicking an element that is zoomed to zooms
		// back out
		closeclick: true,
		// don't reset scroll before zooming. less jaggy zoom starts and ends on
		// mobile browsers, but causes issues when zooming to elements when scrolled
		// to a specific distance in document, typically around 2000px on webkit.
		preservescroll: true
	}


    $('*').hover(function(e) { 
		zoomTarget = $(this);
		if (keyFlag) {}
	});

});

$(document).keydown(function(e) { 
	if ( !keyFlag && e.keyCode == 90) { 
		keyFlag = true;
	}

	if (keyFlag && document.activeElement && e.keyCode == 38 ) { 
		$(document.activeElement).zoomTo();
	}

});
$(document).keyup(function(e) { console.log('up',e.keyCode) 
	if ( keyFlag && e.keyCode == 90) {
		keyFlag = false
		$(document.body).zoomTo();
	}
});
/*$(document).on('mouseover', '*', function(e) {
	if (keyFlag) { console.log($(e.target), e);
		zoomTarget = $(e.target);
	}
});*/
$(document.body).on('mousewheel', function(e){ //console.log(e.originalEvent.wheelDelta)
	if (keyFlag && zoomTarget) {

		if(e.originalEvent.wheelDelta /120 > 0) {
			zoomTarget.zoomTo(settings);
		}
		else{
			$(document.body).zoomTo();
		}

	}
});