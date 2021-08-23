//using selectors inside the element
// traversing the dom

questionBtns = document.querySelectorAll('.question-btn');
questionBtns.forEach(item => {
	item.addEventListener('click', (e) => {
		elem = e.currentTarget.parentElement.parentElement;

		//One liner code 
		elem.classList.toggle('show-text')
		//traditional way i can do it
		if (elem.classList.contains('show-text')) {
			elem.classList.remove('show-text')
		} else {
			elem.classList.add('show-text')
		}
	})
})

