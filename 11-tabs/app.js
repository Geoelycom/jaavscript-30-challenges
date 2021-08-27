//Select the buttons and loop over them
//select the div that contians the active class

const allBtns = document.querySelectorAll('.tab-btn')
const articleContent = document.querySelectorAll('.content')
const about = document.querySelector('.about');

// Loop through all the buttons and attach an eventListener

about.addEventListener('click', (e) => {
	const element = e.target.dataset.id;

	if (element) {
		allBtns.forEach(btns => {
			btns.classList.remove('active')
			e.target.classList.add('active')
		});

		// hide content
		articleContent.forEach(content => {
			content.classList.remove('active')
		});
		const elem = document.getElementById(element)
		elem.classList.add('active')
	}


})


