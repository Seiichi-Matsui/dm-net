// スライドショー
$('.flexslider').flexslider({
controlNav: true,
randomize: true,
directionNav: true,
slideshowSpeed: 5000,
animationSpeed: 1000
});

// navi-menu　20160502
$('#nav ul.navi-btn li a img')
.hover(
function(){
$(this).stop().animate({'marginTop':'-30px'},'normal');
},
function () {
$(this).stop().animate({'marginTop':'-0px'},'normal');
}
);

// SmoothScroll
$("a[href^=#]").click(function(){
$("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500 ,"swing");
return false;
})

// TOPへボタン
var showFlag = false;
var topBtn = $('#page-top');
topBtn.css('bottom', '-200px');
var showFlag = false;

// スクロールが100に達したらボタン表示
$(window).scroll(function () {
if ($(this).scrollTop() > 300) {
if (showFlag == false) {
showFlag = true;
topBtn.stop().animate({'bottom' : '0px'}, 200);
}
} else {
if (showFlag) {
showFlag = false;
topBtn.stop().animate({'bottom' : '-200px'}, 200);
}
}
});
