const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn')
let count = 0;

btn.forEach((item) => {
	item.addEventListener('click', (e) => {
		const element = e.target.classList;
		if (element.contains('increase')) {
			count++;
		} else if (element.contains('decrease')) {
			count--;
		} else {
			count = 0;
		}
		if (count > 0) {
			value.style.color = 'green';
		}
		if (count < 0) {
			value.style.color = 'red'
		}
		if (count == 0) {
			value.style.color = '#222';
		}
		value.innerHTML = count;
	})
})


/* This is the second way we can perform this project by using plain old
functions and selecting each button once. i did it to mainly see how it will
work before learning about contains and using foreach. */


const increaseBtn = document.querySelector('.increase')
const displayNumber = document.querySelector('#value')
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset')


console.log(resetBtn);
console.log(decreaseBtn);

increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);
resetBtn.addEventListener('click', resetNumber)


let num = 0;
function increaseValue() {
	num++;
	displayNumber.innerText = num;
	displayNumber.style.color = 'green';

}

function decreaseValue() {
	num--;
	displayNumber.innerText = num;
	displayNumber.style.color = 'red';
}

function resetNumber() {
	num = 0;
	displayNumber.innerHTML = num;
}
