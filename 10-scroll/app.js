// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggler = document.querySelector('.nav-toggle')
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')

navToggler.addEventListener('click', () => {
	//linkContainer.classList.toggle('show-links')
	const containerHeight = linkContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	console.log(linksHeight)
	if (containerHeight === 0) {
		linkContainer.style.height = `${linksHeight}px`
	} else {
		linkContainer.style.height = 0;
	}

})
// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLinkBtn = document.querySelector('.top-link');

window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset;
	const navHeight = navBar.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		navBar.classList.add('fixed-nav')
	} else {
		navBar.classList.remove('fixed-nav')
	}

	if (scrollHeight > 500) {
		topLinkBtn.classList.add('show-link')
	} else {
		topLinkBtn.classList.remove('show-link')
	}

})
// ********** smooth scroll ************
const smoothLink = document.querySelectorAll('.scroll-link')
smoothLink.forEach(sLink => {
	sLink.addEventListener('click', (e) => {
		e.preventDefault()
		const iD = e.currentTarget.getAttribute("href").slice(1)
		const element = document.getElementById(iD);
		//calculate height
		const navHeight = navBar.getBoundingClientRect().height;
		const linkHeight = linkContainer.getBoundingClientRect().height;
		const fixNav = navBar.classList.contains('fixed-nav');

		let position = element.offsetTop - navHeight;

		if (!fixNav) {
			position = position - navHeight;
		}
if(navHeight > 80){
	position = position + linkHeight;
}

		window.scrollTo({
			letf: 0,
			top: position,
		})

		linkContainer.style.height = 0;
	})
})
console.log(smoothLink)

// select links
