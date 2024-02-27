$('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
  
    // append the first item to the end when sliding to the next item
    if (e.direction == "left") {
      $('.carousel-item').eq(0).appendTo('.carousel-inner');
    }
    // append the last item to the beginning when sliding to the previous item
    else {
      $('.carousel-item').eq(totalItems - 1).prependTo('.carousel-inner');
    }
  });
  