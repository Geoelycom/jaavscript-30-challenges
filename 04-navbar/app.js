// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

//Solving it using the Toggle method
navToggle.addEventListener('click', () => {
	links.classList.toggle('show-links')
})

// solving it with an if statement
// navToggle.addEventListener('click', () => {
// 	if (links.classList.contains('show-links')) {
// 		links.classList.remove('show-links')
// 	} else if (links.classList.contains('links')) {
// 		links.classList.add('show-links')
// 	}
// })  