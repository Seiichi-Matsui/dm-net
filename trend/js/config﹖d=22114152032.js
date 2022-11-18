// navi-menu　20160502
$(function() {
$('#nav ul.navi-btn li a img')
.hover(
function(){
$(this).stop().animate({'marginTop':'-30px'},'normal');
},
function () {
$(this).stop().animate({'marginTop':'-0px'},'normal');
}
);
});

// SmoothScroll
$(function(){
    $("a[href^=#]").click(function(){
    $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500 ,"swing");
    return false;
    })
});


// TOPへボタン
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top, .trend-menu');
    topBtn.css('bottom', '-200px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-200px'}, 200);
            }
        }
    });
});



//slick

var $slideshow = $('.slide-wrap');
var $slide = $('.item');

function randomize(selector){
  $slideshow.find(selector).sort(function(){
    return Math.round(Math.random()) - 0.5;
  }).detach().appendTo($slideshow);
}

$(function(){
  randomize('.item');
  $slideshow.slick({
  		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: true,
		infinite: true,
		pauseOnDotsHover: true,
    centerMode: true,
    centerPadding: '56px'
  });
});

//slidebars
( function ( $ ) {
 // Initialize Slidebars
 var controller = new slidebars();
 controller.init();

 /**
 * Original Version Style Control Classes
 */

 // Open left
 $( '.sb-open-left' ).on( 'click', function ( event ) {
 event.preventDefault();
 event.stopPropagation();

 controller.open( 'sb-left' );
 } );

 // Toggle left
 $( '.sb-toggle-left' ).on( 'click', function ( event ) {
 event.preventDefault();
 event.stopPropagation();

 controller.toggle( 'sb-left' );
 } );

 // Open right
 $( '.sb-open-right' ).on( 'click', function ( event ) {
 event.preventDefault();
 event.stopPropagation();

 controller.open( 'sb-right' );
 } );

 // Toggle right
 $( '.sb-toggle-right' ).on( 'click', function ( event ) {
 event.preventDefault();
 event.stopPropagation();

 controller.toggle( 'sb-right' );
 } );

 // Close
 $( '.sb-close' ).on( 'click', function ( event ) {
 event.preventDefault();
 event.stopPropagation();

 controller.close();
 } );
} ) ( jQuery );

// quiz
$('.answer-area').hide();
$('.open-area').click(function () {
$(this).next().slideToggle('slow');
$(this).toggleClass('active');
});
