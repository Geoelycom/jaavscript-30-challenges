//using selectors inside the element
// traversing the dom

questionBtns = document.querySelectorAll('.question-btn');
const questionText = document.querySelectorAll('.question');

questionBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		hideText()
		elem = e.currentTarget.parentElement.parentElement;
		//console.log(elem)
		//One liner code 
		//elem.classList.toggle('show-text')
		//traditional way i can do it
		if (elem.classList.contains('show-text')) {
			elem.classList.remove('show-text')
		} else {
			elem.classList.add('show-text')
		}
	})

})

function hideText() {
	questionText.forEach(newItem => {
		if (newItem.classList.contains('show-text')) {
			newItem.classList.remove('show-text')
		}
	})
}
