const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn')

slides.forEach((slider, index) => {
	slider.style.left = `${index * 100} %`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
	counter++;
	carousal()
})

prevBtn.addEventListener('click', () => {
	counter--;
	carousal()

})

function carousal() {
	if (counter < slides.length - 1) {
		nextBtn.style.display = 'block';
	} else {
		nextBtn.style.display = 'none';
	}

	if (counter > 0) {
		prevBtn.style.display = 'block'
	} else {
		prevBtn.style.display = 'none'
	}


	slides.forEach(item => {
		item.style.transform = `translateX(-${counter * 100}%)`
	})
}
prevBtn.style.display = 'none'