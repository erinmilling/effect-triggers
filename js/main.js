var $box = $('.box');
var $btnshowHide = $('.btn-show-hide');
var $diamond = $('.diamond');
var $btnMove = $('.btn-move');
var $panel = $('.panel');
var $btncollapseExpand = $('.btn-collapse-expand');
var $circle = $('.circle');
var $btnBounce = $('.btn-bounce');
var $list = $('.list');
var $btnAppend = $(.btn-append);


$btnshowHide.on('click', function () {
  $box.toggleClass('appear');
});
