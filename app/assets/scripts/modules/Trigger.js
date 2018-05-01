import $ from 'jquery';

class Trigger {
  constructor() {
    // About Me Text
    $("#about-me").click(function(){

      $(".dashboard__front__about-me").toggleClass("show-text");
    });
    // Modal
    $("#contact").click(function(){

      $(".modal").addClass("show-modal");
    });
    // Hamburger
    $(".modal-hamburger").click(function(){

      $(".modal").removeClass("show-modal");
    });
    // Curriculum Vitae Full Size
    $(".cv__content").click(function(){

      $(".astronaut").addClass("astronaut-fly");
      $(".dashboard__cv").addClass("show-cv");
    });
    $('.cv__close').click(function () {
      $(".dashboard__cv").removeClass("show-cv");
    })

    // Projects Full Size
    $(".dashboard__projects").click(function(){

      $(".astronaut").addClass("astronaut-fall");
      $(".dashboard__projects").toggleClass("show-projects");
      $(".dashboard__projects--col").toggleClass("slide");
      $(".border-horizontal").toggleClass("show-projects");
      $(".dashboard__projects--background").toggleClass("show-projects--background");
      $(".dashboard__projects--background").toggleClass("no-blur");
      $(".dashboard__featured").toggleClass("no-overflow");
    });
  }
}

export default Trigger;
