
$(function() {

    console.log('loaded');

    $('.content').on('click', function(){
        console.log('run');
        if($('.navbar-toggle').css('display') != 'none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });


    $(document).on("click", ".markdown-body img:not( #imgFrameContainer img )", function(e) {

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

        disableScroll.on();

        container.html(img);

        frame.html(container).appendTo($('body'));
    });

    $(document).on("click", "#imgFrame", function(e) {

        $("#imgFrame").remove();

        disableScroll.off();
    });

});
