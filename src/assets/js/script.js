$(document).ready(function () {
  "use strict";

  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if ($(window).width() < 1024) {
    $(".navbar-menu .has-dropdown").on("click", function (e) {
      $(this).children(".navbar-dropdown").toggle();
    });
  }


 

  // Other code...

  // Counter
  $(".counter-stat").counterUp({
    delay: 10,
    time: 1000,
  });
});

