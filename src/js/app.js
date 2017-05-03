import slider from './lib/slick.js';
import scroll from './lib/scroll.js';
import hamburger from './lib/hamburger.js';

hamburger();
slider();
scroll();

$('.slides').slick({
   arrows: true
});
