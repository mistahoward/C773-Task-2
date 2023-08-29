import { routes } from './routes.js';

export const renderView = (path) => {
	const deHashedPath = path.substring(1); // Removes the '#'
	const templateId = routes[deHashedPath] || routes['/']; // Default to home if path not found
	const template = document.getElementById(templateId);
	const content = template.content.cloneNode(true); // Clone the template
  
	const contentContainer = document.getElementById('content');
	contentContainer.innerHTML = ''; // Clear existing content
	contentContainer.appendChild(content);
};

export const updateActiveLink = (path) => {
	// Remove active class from all links
	document.querySelectorAll('.nav-link').forEach((link) => {
		link.classList.remove('active');
	});

	console.log(path);
	// Add active class to the link that matches the current path
	const activeLinks = document.querySelectorAll(`.nav-link[href="/${path}"]`);
	if (activeLinks) {
		activeLinks.forEach((link) => {
		  link.classList.add('active');
		});
	  }
};

export const navigate = (path) => {
	renderView(path);
	window.history.pushState(null, '', path);
	updateActiveLink(path);
};
