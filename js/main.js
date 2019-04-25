let slider = document.getElementById('myRange');
let output = document.getElementById('demo');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
	removeChildren();
	output.innerHTML = this.value;
	createAndAppend();
};

function randomNumGen(max = 10, min = 0) {
	return Math.ceil(Math.random() * (max - min) + min);
}

function randomNumGenA(max = 10, min = 0, amount) {
	var arr = [];
	for (var x = 0; x < amount; x++) {
		arr[x] = randomNumGen(this.max, this.min) + 'fr';
	}
	arr = arr.toString().replace(/,/gi, ' ');
	return arr;
}

var newA = randomNumGenA(10, 0, 10);

colors = ['white', 'blue', 'red', 'yellow', 'white', 'white', 'white', 'white', 'white'];

updateColours = colourPaletteSet => {
	for (let d = 0; d < 4; d++) {
		colors[d] = colourPaletteSet[d];
	}
};

//create 'a' array
var a = [];
let colourArray = [];

//mondrian DOM selector
var mondrian = document.querySelector('.mondrian');

// build columns (x) and rows (y)
var x = randomNumGen(6, 3);
var y = randomNumGen(7, 2);

// multiply together to calculate number of items
var total = x * y;

// let palette = document.querySelectorAll('.palette');
// let colourPaletteSet = [];

// paletteFill = () => {
// 	for (let s = 0; s < 8; s++) {
// 		colourPicker();
// 		// get sets of 8 different colour palettes to be used when user clicks on them
// 		// to change mondrio
// 		colourPaletteSet[s] = emptyColourArray;

// 		for (let w = 0; w < 4; w++) {
// 			let colour = document.createElement('div');
// 			palette[s].appendChild(colour);
// 			colour.className = 'colour';
// 			colour.style.backgroundColor = emptyColourArray[w];
// 			colourArray.push(colour);
// 		}
// 	}
// };

// window.onload = paletteFill;

function createAndAppend() {
	console.log(colors);

	for (var z = 0; z < output.innerHTML; z++) {
		var div = document.createElement('div');
		mondrian.appendChild(div);
		div.className = 'itemNew';
		a.push(div);
	}
	document.querySelector('.mondrian').style.gridTemplateColumns = `${randomNumGenA(10, 0, x)}`;
	document.querySelector('.mondrian').style.gridTemplateRows = `auto, ${randomNumGenA(10, 0, y)}`;
	a.forEach(function (element) {
		element.style.backgroundColor = `${colors[randomNumGen(10) - 1]}`;
		element.style.gridColumn = `auto / span ${randomNumGen(2)}`;
		element.style.gridRow = `auto / span ${randomNumGen(2)}`;
	});
}

createAndAppend();

function removeChildren() {
	var paras = document.getElementsByClassName('itemNew');
	while (paras.length > 0) {
		paras[0].parentNode.removeChild(paras[0]);
	}
}

// let colourListArray = [
// 	'#FF6633',
// 	'#FFB399',
// 	'#FF33FF',
// 	'#FFFF99',
// 	'#00B3E6',
// 	'#E6B333',
// 	'#3366E6',
// 	'#999966',
// 	'#99FF99',
// 	'#B34D4D',
// 	'#80B300',
// 	'#809900',
// 	'#E6B3B3',
// 	'#6680B3',
// 	'#66991A',
// 	'#FF99E6',
// 	'#CCFF1A',
// 	'#FF1A66',
// 	'#E6331A',
// 	'#33FFCC',
// 	'#66994D',
// 	'#B366CC',
// 	'#4D8000',
// 	'#B33300',
// 	'#CC80CC',
// 	'#66664D',
// 	'#991AFF',
// 	'#E666FF',
// 	'#4DB3FF',
// 	'#1AB399',
// 	'#E666B3',
// 	'#33991A',
// 	'#CC9999',
// 	'#B3B31A',
// 	'#00E680',
// 	'#4D8066',
// 	'#809980',
// 	'#E6FF80',
// 	'#1AFF33',
// 	'#999933',
// 	'#FF3380',
// 	'#CCCC00',
// 	'#66E64D',
// 	'#4D80CC',
// 	'#9900B3',
// 	'#E64D66',
// 	'#4DB380',
// 	'#FF4D4D',
// 	'#99E6E6',
// 	'#6666FF',
// ];

// let emptyColourArray = [];

// colourPicker = () => {
// 	// clear colour array
// 	emptyColourArray = [];

// 	// take a random number from 0 -> length of colourListArray
// 	// add the colour that's in that position of the array to the emptyColourArray
// 	for (let x = 0; x < 4; x++) {
// 		let chosenColour = colourListArray[Math.floor(Math.random() * colourListArray.length)];
// 		emptyColourArray.push(chosenColour);
// 	}
// };

// if a user clicks any of the palettes update the
// for (let b = 0; b < 8; b++) {
// 	palette[b].addEventListener('click', () => {
// 		console.log('click!');
// 		// when palettes are filled, updates the mondrio colours onclick
// 		// (after the initial setting of red blue yellow white)
// 		console.log(colourPaletteSet[b]);
// 		removeChildren();
// 		updateColours(colourPaletteSet[b]);
// 		createAndAppend();
// 	});
// }

// let tl = new TimelineLite();

// tl.to('#palette1', 1, {
// 	left: 100,
// });