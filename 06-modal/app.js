const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
	modalOverlay.classList.toggle('open-modal')
})

btnClose.addEventListener('click', () => {
	modalOverlay.classList.toggle('open-modal')
})

