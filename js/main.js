(function ($) {
   'use strict';

   var _sb = _sb || {};

   $(function () {
    _init();
    _initEvent();
   });

   function _init() {
        _sb.$topCard = $('.top-card');
   }

   function _initEvent() {
       toggleTopCard();
   }

   function toggleTopCard() {
     $('.toggle-top-card').on({
         click: function () {
             _sb.$topCard.slideToggle(400);
         },
         mouseenter: function () {
             animateToggleTopCardBtn();
         }
     });
   }

   function animateToggleTopCardBtn() {
       TweenMax.to('.toggle-top-card .cup', 1.5, { y: -30, repeat: -1, yoyo: true});
   }


}(jQuery));