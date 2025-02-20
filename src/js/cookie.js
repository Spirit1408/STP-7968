export const initCookiePolicy = () => {
	const cookiePolicy = document.querySelector(".cookie-policy");
	const acceptButton = document.querySelector(".cookie-policy-accept");
	const rejectButton = document.querySelector(".cookie-policy-reject");
	const COOKIE_CONSENT_KEY = "cookieConsent";

	const hasCookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

	if (!hasCookieConsent) {
		cookiePolicy.classList.add("active");
	}

	acceptButton.addEventListener("click", () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, true);
		cookiePolicy.classList.remove("active");
	});

	rejectButton.addEventListener("click", () => {
		cookiePolicy.classList.remove("active");
	});
};
