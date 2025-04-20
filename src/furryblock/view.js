/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
import {Swiper} from 'swiper';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
		keyboard: true,
		createElements: true,
		autoplay: {
			delay:2500,
			disableOnInteraction: false,
		},
		centerdSlides: false,
		modules:[Autoplay, Keyboard, Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
			dynamicBullets: true,
    },
		direcction:'horizontal',
		slidesPerView:'auto',
		effect:'coverflow',
		covertflowEffect:{
			rotate:50,
			stretch:0,
			depth:100,
			modifier:1,
			slideShadows:true,
		},
		initalSlide:0,
		spaceBetween:10,
  });
});

/* eslint-disable no-c
 * onsole */
