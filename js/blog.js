// サムネイル用画像大きさ自動調整（スマホ）
$("#thumbnailList1 img").MyThumbnail({ 
	thumbWidth:57, 
    thumbHeight:57, 
    backgroundColor:"", 
    imageDivClass:"myPic" 
}); 
// サムネイル用画像大きさ自動調整（30px）
$("#thumbnailList30 img").MyThumbnail({ 
	thumbWidth:30, 
    thumbHeight:30, 
    backgroundColor:"", 
    imageDivClass:"myPic" 
}); 

// スライドショー
$( document ).ready(function( $ ) {
$('#slider-pro').sliderPro({
    autoScaleLayers:true,//キャプションの自動変形
    waitForLayers: true,//キャプションのアニメーションが終了してからスライドするか
    width: 460,//横幅
    height: 200,
    autoplay:true,//自動再生
    arrows: true,//左右の矢印
    buttons: true,//ナビゲーションボタン
    slideDistance:0,//スライド同士の距離
});
$('#slider-pro-sp').sliderPro({
    autoScaleLayers:true,//キャプションの自動変形
    waitForLayers: true,//キャプションのアニメーションが終了してからスライドするか
    width: 460,//横幅
    height: 200,
    autoplay:true,//自動再生
    arrows: true,//左右の矢印
    buttons: true,//ナビゲーションボタン
    slideDistance:0,//スライド同士の距離
});
});

// SmoothScroll（TOPへボタンの挙動）
$("a[href^=#page]").click(function(){
$("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500 ,"swing");
return false;
})

// TOPへボタン
var showFlag = false;
var topBtn = $('#page-top');
topBtn.css('bottom', '-200px');
var showFlag = false;

// スクロールが100に達したらTOPへボタン表示
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
