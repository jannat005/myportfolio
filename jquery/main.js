/*loading*/
$(window).on("load", function() {

	$(".loader .inner").fadeOut(600, function() {
		$(".loader").fadeOut(850);
	});

})


/*superslider */
$(document).ready(function() {
  $("#slides").superslides({
    play: 5000,
    pagination: false
  });
  /* type*/
  var typed = new Typed(".typed", {
    // Waits 1000ms after typing "First"
    strings: ["Web Designer", "Software Developer", "LARAVEl"],
    loop: true,
    typeSpeed: 70,
    startDelay: 1000,
    showCursor: false
  });
  /*skill */
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

		var skillsTopOffset = $('.skill').offset().top;
		$(window).scroll(function(){
			if(window.pageYOffset > skillsTopOffset - $(window).height()+200){
			 $('.chart').easyPieChart({
            easein: 'easeInOut',
			barColor: '#fff',
			trackColor: false,
			scaleColor: false,
			lineWidth:4,
			size: 152,
			onStep: function(from,to,percent){
				$(this.el).find('.percent').text(Math.round(percent));
			}					
        });	
			}
		
		});
		// Fancy Box
            $("[data-fancybox]").fancybox();
            // Isotope
            $('.items').isotope({
                filter: '*',
                animationOptions:{
                    easing:'linear',
                    duration:1500,
                    queue:false
                }
            });
            $('.filters a').click(function(){
                $('.filters a').removeClass('.current'); 
                $('.filters a').addClass('.current'); 
                
                var selector = $(this).attr('data-filter');
                             $('.items').isotope({
                                 filter: selector,
                                 animationOptions:{
                                     easing:'linear',
                                     duration:1500,
                                     queue:false
                                 }
            
                  }); 
});
});

/* blog*/
$("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");				 
        });
        
        


		