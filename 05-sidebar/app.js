const sideToggle = document.querySelector('.sidebar-toggle');
const aSide = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn')

sideToggle.addEventListener('click', () => {
	aSide.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
	aSide.classList.toggle('show-sidebar')
})
