import Swiper from "swiper";
import "swiper/css";

export const initGallerySwiper = () => {
	new Swiper(".swiper", {
		freeMode: true,
		spaceBetween: 0,
		slidesPerView: 1,
		breakpoints: {
			320: {
				slidesPerView: 2,
			},

			1200: {
				slidesPerView: 4,
			},
		},
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
};
