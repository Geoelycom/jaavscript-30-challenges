import { months, weekdays } from './data/data.js'
console.log(months)
console.log(weekdays)

const giveaway = document.querySelector('.giveaway')
const deadlineContainer = document.querySelector('.deadline')
const timeRemaining = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()

//let giveAwayDate = new Date(2021, 8, 2, 7, 30, 2);
const giveAwayDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = giveAwayDate.getFullYear()
const giveawayHours = giveAwayDate.getHours()
const giveawayMinutes = giveAwayDate.getMinutes()
const date = giveAwayDate.getDate()
let month = giveAwayDate.getMonth()
month = months[month]
let weekday = weekdays[giveAwayDate.getDay()]
giveaway.textContent = `give Away ends on ${weekday}, ${date} ${month} ${year} ${giveawayHours}:${giveawayMinutes}pm`;

const endDate = giveAwayDate.getTime()

function remainingTime() {
	const today = new Date().getTime()
	const t = giveAwayDate - today;
	const oneDay = 24 * 60 * 60 * 1000;
	const hour = 60 * 60 * 1000;
	const minute = 60 * 1000;
	let days = t / oneDay
	days = Math.floor(days)
	let hours = Math.floor((t % oneDay) / hour)
	let minutes = Math.floor((t % hour) / minute)
	let seconds = Math.floor((t % minute) / 1000)
	//set values array for the times remaining
	const values = [days, hours, minutes, seconds];
	// add a trailing Zero if time is less > 10
	function format(item) {
		if (item < 10) {
			return item = `0${item}`
		}
		return item
	}
	timeRemaining.forEach((time, index) => {
		time.innerHTML = format(values[index])
	})
	if (t < 0) {
		clearInterval(countDown)
		deadlineContainer.innerHTML = `<h4 class="expired">Sorry this giveaway as expired</h4>`
	}
}
let countDown = setInterval(remainingTime, 1000)

remainingTime()