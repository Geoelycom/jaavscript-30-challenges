import { text } from './data/data.js';

//console.log(text);
const form = document.querySelector('.lorem-form');
const article =  document.querySelector('.lorem-text');
const input = document.getElementById('amount');


form.addEventListener('submit', (e) => {
const number =  parseInt(input.value);
const random = Math.floor(Math.random() * text.length)
if (isNaN(number) || number <= 0 || number > 9 ){
	article.innerHTML = `<p class="result">${text[random]}</p>`;
} 
 else if (number){
	let count = '';
	for (let i = 0; i < number; i++){
		count += `${text[i]}<br> <br>`;
	}
	article.innerHTML = `<p class="result">${count}</p>`;

}

e.preventDefault()
	
})