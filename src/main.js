import { initGallerySwiper } from "./js/gallery";
import { initCookiePolicy } from "./js/cookie";
import { setupBurgerMenu, updateHeaderOnScroll } from "./js/header";

document.addEventListener("DOMContentLoaded", () => {
	initGallerySwiper();
	initCookiePolicy();
	setupBurgerMenu();
	updateHeaderOnScroll();

	window.addEventListener("scroll", updateHeaderOnScroll);
});
