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

        if (scroll > 400) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
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

// WINDOW LOAD FUNCTION STARTS


jQuery(document).ready( function() {
    
    var selector = jQuery(this).attr('data-filter');

    var isocontainer = jQuery('.showcase');

    isocontainer.imagesLoaded( function() {
      isocontainer.isotope({
        itemSelector: '.portfolio-item',
      })
    });

    // var $grid = isocontainer.isotope({
    //     itemSelector : '.portfolio-item',
    //     masonry: {
    //         columnWidth: 1
    //     }
    // });

    // isocontainer.imagesLoaded().progress( function() {
    //     isocontainer.isotope('layout');
    // });

    //Add the class selected to the item that is clicked, and remove from the others
    var optionSets = jQuery('.portfolio-filter'),
    optionLinks = optionSets.find('a');

    optionLinks.click(function(e){
        e.preventDefault();
        var _this = jQuery(this);
        
        // don't proceed if already selected
        if ( _this.hasClass('filter-active') ) {
            return false;
        }
    
        // var jQueryoptionSet = _this.parents('#portfolio-filter);
        optionSets.find('.filter-active').removeClass('filter-active');
        _this.addClass('filter-active');

        //When an item is clicked, sort the items.
        var selector = jQuery(this).attr('data-filter');
        isocontainer.isotope({ filter: selector });
    });
});