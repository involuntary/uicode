jQuery(function($){

	$('#hero').owlCarousel({
	    loop: true,
	    items: 1,
	    nav: true
	})

	$(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            $( '.site-header' ).addClass( 'sticky' );
        } else {
            $( '.site-header' ).removeClass( 'sticky' );
        }
    });

    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 700);
    });


    // Parallax effect
    $window = $(window);
    $('.parallax[data-type="background"]').each(function(){
        var $scroll = $(this);
        $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
        var coords = '0%'+ yPos + 'px';
        $scroll.css({ backgroundPosition: coords });
        });
    });
});


/* Create HTML5 element for IE */
document.createElement("section");