let bg = document.body
let colorHex = document.querySelector('span')


function changeBackground() {
	let result = ''
	let characters = 'ABCDEF0123456';
	let charactersLength = characters.length

	for (let i = 0; i <= 5; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	bg.style.background = '#'+result
	colorHex.innerText = '#'+result
}