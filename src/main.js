import { initGallerySwiper } from './js/gallery';
import { initCookiePolicy } from './js/cookie';
import { setupBurgerMenu } from './js/header';

document.addEventListener('DOMContentLoaded', () => {
  initGallerySwiper();
  initCookiePolicy();
  setupBurgerMenu();
});
