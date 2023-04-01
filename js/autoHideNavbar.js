/* script to auto hyde navbar*/

$(document).ready(function() {
  $('.navbar').affix({
    offset: {
      top: $('.navbar').offset().top
    }
  });
});
