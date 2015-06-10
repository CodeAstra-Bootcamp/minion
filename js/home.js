$(document).ready(function() {
  $('#nav-toggler').click(function() {
    if($('#home header').hasClass('active')) {
      $('#nav-toggler').removeClass('fa-times').addClass('fa-bars');
      $('#home header').removeClass('active');
    } else {
      $('#nav-toggler').removeClass('fa-bars').addClass('fa-times');
      $('#home header').addClass('active');
    }
  });
});