import data from './data.js';
//Generate everything from data.js during runtime with javascript
const menu = data.menu;
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded', () => {
	sectionCenter.innerHTML = displayMenu()
})


// Third Milestone is to display the btns dynamically

function displayBtns() {
	let buttons = ''
	let btns = []
	menu.forEach(uniqueItems => {
		btns.push(uniqueItems.category)
	})
	let unique = ['all', ... new Set(btns)]
	unique.forEach(newBtns => {
		buttons += `<button class="filter-btn" type="button" data-id=${newBtns}>${newBtns}</button>`
	})
	return buttons;

}

btnContainer.innerHTML = displayBtns()

// second Milestones is to filter the array.

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btnItems => {
	btnItems.addEventListener('click', (e) => {
		const foodCategory = e.currentTarget.dataset.id;
		const menuCategory = menu.filter(foodType => {
			if (foodType.category === foodCategory) {
				return foodType;
			}
		});

		if (foodCategory === "all") {
			sectionCenter.innerHTML = displayMenu()

		}
		else {
			sectionCenter.innerHTML = displayMenu(menuCategory)
		}
	})
})

//First milestone = displauy menu to the UI

function displayMenu(items = menu) {
	let foodMenu = '';
	items.forEach(menuItems => {
		foodMenu += `<article class="menu-item">
		<img src=${menuItems.img} alt=${menuItems.title} class="photo">
		<div class="item-info">
		<header>
		<h4>${menuItems.title}</h4>
		<h4 class="price">$${menuItems.price}</h4>
		</header>
		<p class="item-text">${menuItems.desc}</p>
		</div>

</article>`;
	}
	);
	return foodMenu;
}



//<button class="filter-btn" type="button" data-id="all">All</button>