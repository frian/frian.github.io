
$(function() {

    console.log('loaded');

    $('.content').on('click', function(){
        console.log('run');
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});
