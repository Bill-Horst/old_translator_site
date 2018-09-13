$(document).ready(function() {

  // ACTIVATE TOOLTIPS
  $(function () {
    $('.link-to-website').tooltip();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // END ACTIVATE TOOLTIPS


  // GET CURRENT YEAR
  $('#current-year').html(new Date().getFullYear());
  // END GET CURRENT YEAR


  // MAKE HAMBURGER ICON MENU DISAPPEAR UPON CLICKING AN ITEM
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });
  // END MAKE HAMBURGER ICON MENU DISAPPEAR UPON CLICKING AN ITEM


});
