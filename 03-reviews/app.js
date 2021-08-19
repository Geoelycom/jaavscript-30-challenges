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

let counter = 3;


window.addEventListener("DOMContentLoaded", () => {
	displayReviewer(counter)
	//console.log(counter)
});


function displayReviewer(person) {
const item = reviewDisplay[person];
img.src = item.img;

}

displayReviewer()

