const colors = ["green", "red", "yellow", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const btnColor = document.querySelector('.color')
btn.addEventListener('click', changeColor)

function changeColor() {
	let randomColor = getRandomColor();
	document.body.style.backgroundColor = colors[randomColor];
btnColor.textContent = colors[randomColor]
}
changeColor()

function getRandomColor() {
	return Math.floor(Math.random() * colors.length)
}