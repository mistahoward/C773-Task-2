import { routes } from './routes.js';

export const renderView = (path) => {
	const deHashedPath = path.substring(1); // Removes the '#'
	const templateId = routes[deHashedPath] || routes['/']; // Default to home if path not found
	const template = document.getElementById(templateId);
	// const content = document.importNode(template.content, true);
	// document.getElementById('container').innerHTML = '';
	// document.getElementById('container').appendChild(content);
};

export const updateActiveLink = (path) => {
	// Remove active class from all links
	document.querySelectorAll('.nav-link').forEach((link) => {
		link.classList.remove('active');
	});

	if (path === '/') {
		path = '';
	  }
	// Add active class to the link that matches the current path
	const activeLink = document.querySelector(`.nav-link[href="/${path}"]`);
	if (activeLink) {
		activeLink.classList.add('active');
	}
};

export const navigate = (path) => {
	renderView(path);
	window.history.pushState(null, '', path);
	updateActiveLink(path);
};
