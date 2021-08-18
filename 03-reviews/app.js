import data from './data.js';
//Generate the whole article section with all its content on the fly with javascript
const reviewDisplay = data.reviews;
console.log(reviewDisplay);
const reviewWrap = document.querySelector('.review')
reviewWrap.classList.add('review')
const articleElement = document.createElement('div');
articleElement.classList.add('img-container')


function displayItems(){
	for (let i = 0; i < reviewDisplay.length; i++){
		console.log(i)
		const reviewImgage = document.createElement('img')
	}
}
displayItems()












reviewWrap.appendChild(articleElement)