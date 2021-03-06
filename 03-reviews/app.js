import data from './data.js';
//Generate the whole article section with all its content on the fly with javascript
// let counter = 0;
const reviewDisplay = data.reviews;
// console.log(reviewDisplay);
// const reviewWrap = document.querySelector('.review')
// reviewWrap.classList.add('review')
// const articleElement = document.createElement('div');
// articleElement.classList.add('img-container')
// function displayItems() {
// 	const reviewImage = document.createElement('img')
// 	reviewImage.id = ('person-img')
// 	reviewImage.src = reviewDisplay.img;
// 	articleElement.appendChild(reviewImage);
// 	reviewWrap.appendChild(articleElement)
// 	console.log(reviewImage)

//create a wrapper for all text elements
// 	const authorName = document.createElement('h4');
// 	authorName.classList.add('author');
// 	authorName.innerText = reviewDisplay.name;
// 	articleElement.appendChild(authorName)
// 	console.log(authorName)

// }

//displayItems()

// for (let i = 0; i < reviewDisplay.length; i++){
// 	const reviewImage = document.createElement('img')
// 	reviewImage.classList.add('person-img')
// 	reviewImage.src = i.img;
//reviewWrap.appendChild(articleElement)



const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

const image = document.querySelector('#person-img');
const author = document.querySelector('#author');
const info = document.querySelector('#info');
const job = document.querySelector('#job')

let counter = 0;


window.addEventListener("DOMContentLoaded", () => {
	displayReviewer(counter)
});


function displayReviewer(person) {
	const item = reviewDisplay[person]
	image.src = item.img;
	author.textContent = item.name;
	info.textContent = item.text;
	job.textContent = item.job;
}

// Display prev person
nextBtn.addEventListener('click', () => {
	counter++;
	if (counter > reviewDisplay.length - 1) {
		counter = 0;
	}
	displayReviewer(counter)
})


prevBtn.addEventListener('click', () => {
	counter--;
	if (counter < 0) {
		counter = reviewDisplay.length - 1;
	}
	displayReviewer(counter)
})

// Display a Random  person
randomBtn.addEventListener('click', () => {
	counter =  Math.floor(Math.random() * reviewDisplay.length)
	displayReviewer(counter)
})

