// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert');
const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editId = '';
// ****** EVENT LISTENERS **********
// load items
window.addEventListener('DOMContentLoaded', setUpItems)
// submit form
form.addEventListener('submit', addItem)
// clear btns
clearBtn.addEventListener('click', deleteItems)
// ****** FUNCTIONS **********
function addItem(e) {
	const value = grocery.value;
	const id = new Date().getTime().toString()
	if (value && !editFlag) {
		createElement(id, value)
		displayAlert('item added to the list', 'success')
		container.classList.add('show-container')
		// add to local storage
		addToLocalStorage(id, value)
		//set back to default
		setBackToDefault()
	}
	else if (value && editFlag) {
		editElement.innerHTML = value;
		displayAlert('value changed', 'success')
		//edit local-storage
		editLocalStorage(editId, value)
		setBackToDefault()
	}
	else {
		displayAlert('please enter value', 'danger')
	}

	e.preventDefault()
}

// display alert
function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	// remove alert
	setTimeout(() => {
		alert.textContent = '';
		alert.classList.remove(`alert-${action}`);

	}, 1000)

}

//set back to default
function setBackToDefault() {
	grocery.value = '';
	editFlag = false;
	editId = '';
	submitBtn.textContent = 'submit'
}

// clear/delete items
function deleteItems() {
	const items = document.querySelectorAll('.grocery-item')
	if (items.length > 0) {
		items.forEach(itemsList => {
			list.removeChild(itemsList)
		})
		container.classList.remove('show-container')
		displayAlert('empty list', 'success');
		setBackToDefault()
		localStorage.removeItem('list')
	}
}
//delete function
function deleteElement(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	list.removeChild(element)
	if (list.children.length == 0) {
		container.classList.remove('show-container')
	}
	displayAlert('item removed', 'danger')
	setBackToDefault()
}

//edit function
function editItems(e) {
	const element = e.currentTarget.parentElement.parentElement;
	// set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling;
	//set form value
	grocery.value = editElement.innerHTML;
	editFlag = true;
	editId = element.dataset.id;
	submitBtn.textContent = 'edit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	const groceryList = { id, value }
	let itemsInStorage = getLocalStorage()
	itemsInStorage.push(groceryList)
	localStorage.setItem('list', JSON.stringify(itemsInStorage))
}


function removeFromLocalStorage(id) {
	let items = getLocalStorage()
	items = items.filter(storageItem => {
		if (storageItem.id !== id) {
			return storageItem
		}
	});
	localStorage.setItem('list', JSON.stringify(itemsInStorage))

}

function editLocalStorage(id, value) {
	let items = getLocalStorage()
	items = items.map(item => {
		if (item.id === id) {
			item.value = value
		}
		return item;
	});
	localStorage.setItem('list', JSON.stringify(itemsInStorage))
}

function getLocalStorage() {
	return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

}
// ****** SETUP ITEMS **********

function setUpItems() {
	let items = getLocalStorage();
	if (items.length > 0) {
		items.forEach(item => {
			createElement(item.id, item.value)
		})
	}
}

function createElement(id, value) {
	//create element dynamically
	const element = document.createElement('article');
	//add class to created element
	element.classList.add('grocery-item')
	//create data id fr dataset
	const attr = document.createAttribute('data-id')
	attr.value = id;
	element.setAttributeNode(attr)
	element.innerHTML = `
							<p class="title">${value}</p>
							<div class="btn-container">
							<button type="button" class="edit-btn">
							<i class="fas fa-edit"></i>
							</button>
							<button type="button" class="delete-btn">
							<i class="fas fa-trash"></i>
							</button>
							</div>
	`;
	const deleteBtn = element.querySelector('.delete-btn');
	const editBtn = element.querySelector('.edit-btn')
	editBtn.addEventListener('click', editItems)
	deleteBtn.addEventListener('click', deleteElement)
	list.appendChild(element)
}