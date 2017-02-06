
$(function() {

    console.log('loaded');

    $('.content').on('click', function(){
        console.log('run');
        if($('.navbar-toggle').css('display') != 'none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });


    $(document).on("click", "img:not( #imgFrameContainer img )", function(e) {

        // -- create the frame
        var frame = $("<div/>").attr('id', 'imgFrame');

        // -- create the container
        var container = $("<div/>").attr('id', 'imgFrameContainer');

        // -- get and set top position of the frame
        var top  = window.pageYOffset || document.documentElement.scrollTop;
        frame.css('top', top);

        var img = new Image();

        $(img).css('max-height', $(window).height());

        img.onload = function() {

        };

        img.src = $(this).attr("src");

        disableScroll();

        container.html(img);

        frame.html(container).appendTo($('body'));
    });

    $(document).on("click", "#imgFrame", function(e) {

        $("#imgFrame").remove();

        enableScroll();
    });

});


/**
 * -- Prevent scrolling -------------------------------------------------------
 */

/**
 * left: 37, up: 38, right: 39, down: 40,
 * spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
 */
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove  = preventDefault; // mobile
	document.onkeydown  = preventDefaultForScrollKeys;

	unloadScrollBars();
}

function enableScroll() {

	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;

	reloadScrollBars();
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}
