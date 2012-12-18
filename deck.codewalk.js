
(function($, deck, undefined_) {
  var $d, updateCode,
    _this = this;
  $d = $(document);
  updateCode = function(e, from, to) {
    var slide;
    console.log('updating code...' + from + " " + to);
    if (from < to) {
      slide = $.deck('getSlide', to);
      return $('.codewalk').filter(slide.data('codewalk')).fadeIn('fast');
    } else if (to < from) {
      slide = $.deck('getSlide', from);
      return $('.codewalk').filter(slide.data('codewalk')).fadeOut('fast');
    }
  };
  return $d.bind("deck.change", updateCode);
})(jQuery, "deck");
