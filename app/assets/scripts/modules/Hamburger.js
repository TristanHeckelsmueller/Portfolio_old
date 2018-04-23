import $ from 'jquery';

class Hamburger {
  constructor() {
    $(".hamburger").click(function(){
      $(".mobile-menu").toggleClass("show");
      $(".hamburger").toggleClass("ham-top");
      $(".hamburger").toggleClass("ham-bottom");
      $(".hamburger__center").toggleClass("ham-center");
    });
  }
}




export default Hamburger;
