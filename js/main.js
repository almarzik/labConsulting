 $(function() {
 	// плавное перемещение страницы к нужному блоку
	$(".go_to").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
	// Carousel
     $('.carousel').slick({
     	dots:true,
     	prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    	nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
     });
       // Preloader 
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
     // Modal
     $('.phone__btn, .feedback__btn').click(function(e){
     	e.preventDefault();
     	$('#exampleModal').arcticmodal();
     })
	// Menu opener hamburger
    $('.hamburger').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('hamburgerer');
    });
     

});