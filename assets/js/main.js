import { navigate } from "/assets/js/router.js"

feather.replace();

document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const path = e.currentTarget.getAttribute('href').substring(1); // Remove the '#'
		navigate(path);
	});
});

// Handle browser's back and forward buttons
window.addEventListener('popstate', () => {
	const path = window.location.pathname;
	navigate(path);
});
