$.fn.autoChange = function(config) {
   // オプション
   var options = $.extend({
      effect  : 'fade',
      type    : 'repaet',
      timeout : 30000,  /* 表示時間：単位ミリ秒（ms)で指定。3秒→3000 */
      speed   : 1000   /* エフェクトにかかる時間：単位ミリ秒（ms)で指定。3秒→3000、'slow'、'normal'、'fast'でもok */
   }, config);

   return this.each(function() {
      // カウンター初期化
      var current = 0;
      var next = 1;

      // 指定した要素の子要素を取得
      var element = $(this).children();

      // 全ての要素を非表示にする
      $(element).hide();

      // 最初の要素だけ表示する
      $(element[0]).show();

      // 要素を切り替えるスクリプト
      var change = function(){
         // フェードしながら切り替える場合
         if (options.effect == 'fade') {
            $(element[current]).fadeOut(options.speed);
            $(element[next]).fadeIn(options.speed);

         // スライドしながら切り替える場合
         } else if  (options.effect == 'slide') {
            $(element[current]).slideUp(options.speed);
            $(element[next]).slideDown(options.speed);
         }

         // リピートする場合
         if (options.type == 'repeat') {
            if ((next + 1) < element.length) {
                current = next;
                next++;
            } else {
                current = element.length - 1;
                next = 0;
            }
         }

         // 最後の要素でストップする場合
         if (options.type == 'stop') {
            if ((next + 1) < element.length) {
                current = next;
                next++;
            } else {
                return;
            }
         }
      };

      // 設定時間毎にスクリプトを実行
      var timer = setInterval(function(){change();}, options.timeout);
   });
};


// 自動切り替えする要素の設定
$(function() {
   $('#banner1').autoChange({effect : 'fade', type : 'repeat', timeout: 15000, speed : 1000});
   $('#banner2').autoChange({effect : 'fade', type : 'repeat', timeout: 5000, speed : 900});
   $('#banner3').autoChange({effect : 'slide', type : 'repeat', timeout: 5000, speed : 1500});
   $('#sample4').autoChange({effect : 'slide', type : 'stop', timeout: 3000, speed : 1000});
});