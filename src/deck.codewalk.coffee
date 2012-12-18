(($, deck, undefined_) ->
  $d = $(document)

  updateCode = (e, from, to) =>
    console.log('updating code...' + from + " " + to)
  
    if from < to
      slide = $.deck('getSlide', to)
      $('.codewalk').filter(slide.data('codewalk')).fadeIn('fast')
    else if to < from
      slide = $.deck('getSlide', from)
      $('.codewalk').filter(slide.data('codewalk')).fadeOut('fast')

  $d.bind("deck.change", updateCode)
) jQuery, "deck"