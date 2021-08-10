// IIFE Imediately invoked fuction
(function gameboard(name) {
	this.name = name;
	return name;
})()


const gameBoard = (name, level) => {
	const player = () => console.log('hello `${name}`')
	return { name, level, player }

}
const john = gameBoard('john', 35)
console.log(john.name)
john.player()

