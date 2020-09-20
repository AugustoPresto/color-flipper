let bg = document.body
let colorHex = document.querySelector('span')

function changeBackground() {
	bg.style.background = 'red'
	colorHex.innerText = bg.style.background
}