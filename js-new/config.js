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

// スマホサイト振り分け 20160502
$(function(){
var ua = navigator.userAgent;
var sp_flag = (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 )
if(!sp_flag){
$('.sp_btn').remove();
}
if (sessionStorage
      && !sessionStorage.getItem("sp_flag_set")
      && sp_flag) {
if(window.confirm('糖尿病ネットワークには\nスマートフォン用のサイトが\nあります。表示しますか？')) {
//URLを取得
var url = location.href;
//パスを取得
var path = location.pathname;
//「/」で区切って配列化
var pathinfo = path.split('/');
//最後の要素（ファイル名）だけ抜き出し
var filename = pathinfo.pop();
// URLにsp下の階層を追加
var locateurl = '/' + pathinfo[1] + '/sp/' + pathinfo[2] + '/' + filename;
location.href = locateurl;
        sessionStorage.setItem("sp_flag_set",false);
      }else{
        sessionStorage.setItem("sp_flag_set",true);
      }
}
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
    var topBtn = $('#page-top');
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
