import Hamburger from './modules/Hamburger.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import SmoothScroll from './modules/SmoothScroll.js';
import Trigger from './modules/Trigger.js';


let hamburger = new Hamburger();
let smoothscroll = new SmoothScroll();
let trigger = new Trigger();



import $ from 'jquery';

new RevealOnScroll($(".projects__content--mod"), "85%");
new RevealOnScroll($(".contact__content--box"), "85%");
