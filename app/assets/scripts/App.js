import Hamburger from './modules/Hamburger.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import SmoothScroll from './modules/SmoothScroll.js';
import Trigger from './modules/Trigger.js';
import CV from './modules/CV.js';
import Projects from './modules/Projects.js';





let projects = new Projects();
let hamburger = new Hamburger();
let smoothscroll = new SmoothScroll();
let trigger = new Trigger();
let cv = new CV();



new Projects

import $ from 'jquery';

new RevealOnScroll($(".projects__content--mod"), "85%");
new RevealOnScroll($(".contact__content--box"), "85%");




// $.ajax(){
//   url: pageRefInput,
//   type: "GET",
//   dataType: "text",
//   success: function( response ) {
//     console.log('the page was loaded', response);
//     $('.main').html(response)
//   },
//   error: function (error) {
//     console.log('Page was not loaded', error);
//   },
//   complete: function (xhr, status) {
//     console.log("The request is complete!");
//   }
// }


function callPage(pageRefInput){
  $.ajax({
    url: pageRefInput,
    type: "GET",
    dataType: "text",
    success: function( response ) {
      console.log('the page was loaded', response);
      $('.main').html(response)
    },
    error: function (error) {
      console.log('Page was not loaded', error);
    },
    complete: function (xhr, status) {
      console.log("The request is complete!");
    }
  });
}

  $('.spa-ajax').click(function (e) {
    e.preventDefault();
    let pageRef = $(this).attr('href');
    callPage(pageRef);
  });
