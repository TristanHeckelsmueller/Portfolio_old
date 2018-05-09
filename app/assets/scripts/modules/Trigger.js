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

    //Projects
    let cursade = '<div class="projects__column" id="cursade_main"></div>';
    let ouiui = '<div class="projects__column" id="ouiui"></div>';
    let chat = '<div class="projects__column" id="chat"></div>';
    let hob = '<div class="projects__column" id="hob"></div>';
    let fzg = '<div class="projects__column" id="fzg"></div>';
    let dao_home = '<div class="projects__column" id="dao_home"></div>';

    let projects_div = '<h2>Projects:</h2>' + '<div class="projects">' + cursade + ouiui + chat + hob + fzg + dao_home + '</div>';
    let projects_counter = 0;
    $('#projects').click(function () {
      if (projects_counter == 0) {
        $('.main').append(projects_div);
        projects_counter++;
      }
      console.log(projects_counter);
    });


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
