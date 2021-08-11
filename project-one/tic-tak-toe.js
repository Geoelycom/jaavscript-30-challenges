const cellElement = document.querySelectorAll('.cell')
const board = document.querySelector('#board')
const winningMessage = document.querySelector('[data-winning-message-text]')
const winningText = document.querySelector('.winning-message');
const restart = document.querySelector('#restart-button');
const winningOutComes = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]


const class_X = 'x';
const class_circle = 'circle';
let circleTurn;

startGame()

restart.addEventListener('click', startGame)

function startGame() {
	circleTurn = false;
	cellElement.forEach((cell) => {
		cell.classList.remove(class_X);
		cell.classList.remove(class_circle);
		cell.addEventListener('click', moveCell, { once: true })
	})
	hoverBoard()
	winningText.classList.remove('show')
}

function moveCell(e) {
	// place mark
	const cell = e.target;
	const currentClass = circleTurn ? class_circle : class_X
	//check turn
	placeMark(currentClass, cell)
	if (checkWin(currentClass)) {
		endGame(false)


		//do something
	} else if (isDraw()) {
		endGame(true)

	} else {
		swapTurn()
		hoverBoard()

	}
}

function endGame(draw) {
	if (draw) {
		winningMessage.innerText = 'Draw!'
	} else {
		winningMessage.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
	}
	winningText.classList.add('show');
}
//moveCell();

function isDraw() {
	return [...cellElement].every(cell => {
		return cell.classList.contains(class_X) || cell.classList.contains(class_circle)
	})
}

function placeMark(currentClass, cell) {
	cell.classList.add(currentClass)
}

function swapTurn() {
	circleTurn = !circleTurn;
}

function hoverBoard() {
	board.classList.remove(class_X)
	board.classList.remove(class_circle)
	if (circleTurn) {
		board.classList.add(class_circle)
	} else {
		board.classList.add(class_X)
	}
}

function checkWin(currentClass) {
	return winningOutComes.some(combination => {
		return combination.every(index => {
			return cellElement[index].classList.contains(currentClass)
		})
	})
}
