export function setupBurgerMenu() {
	const burgerOpen = document.querySelector(".burger-open");
	const burgerClose = document.querySelector(".burger-close");
	const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
	const overlay = document.querySelector(".overlay");

	if (burgerOpen && burgerClose && mobileMenuWrapper && overlay) {
		function openMenu() {
			mobileMenuWrapper.classList.add("active");
			overlay.classList.add("active");
			burgerOpen.style.display = "none";
			document.body.style.overflow = "hidden";
		}

		function closeMenu() {
			setTimeout(() => {
				mobileMenuWrapper.classList.remove("active");
			}, 500);
			overlay.classList.remove("active");
			burgerOpen.style.display = "";
			document.body.style.overflow = "";
		}

		burgerOpen.addEventListener("click", openMenu);
		burgerClose.addEventListener("click", closeMenu);
		overlay.addEventListener("click", closeMenu);
	}
}

export function updateHeaderOnScroll() {
	const header = document.querySelector(".header");
	if (window.scrollY > 50) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
}
