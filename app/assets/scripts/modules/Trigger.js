import $ from 'jquery';

class Trigger {
  constructor() {
    // About Me Text
    $("#about-me").click(function(){
      console.log("Trigger")
      $(".dashboard__front__about-me").toggleClass("show-text");
    });
    // Modal
    $("#contact").click(function(){
      console.log("Trigger")
      $(".modal").addClass("show-modal");
    });
    // Hamburger
    $(".modal-hamburger").click(function(){
      console.log("Trigger")
      $(".modal").removeClass("show-modal");
    });
    // Curriculum Vitae Full Size
    $(".dashboard__cv").click(function(){
      console.log("Trigger")
      $(".dashboard__cv").toggleClass("show-cv");
      $(".dashboard__cv--tribe").toggleClass("no-blur");
    });
    $("#cv").click(function(){
      console.log("Trigger")
      $(".dashboard__cv").toggleClass("show-cv");
      $(".dashboard__cv--tribe").toggleClass("no-blur");
    });
    // Projects Full Size
    $(".dashboard__projects").click(function(){
      console.log("Trigger")
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
