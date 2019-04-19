var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');

var xCoord = document.getElementById('xCoord');
var yCoord = document.getElementById('yCoord');


var getCoordinates = function (evt) {
	let arr = {};
	let x = evt.offsetX;
	let y = evt.offsetY;

	xCoord.innerText = x;
	yCoord.innerText = y;
};

var system = {
	currentTool : '',
	currentColor : document.querySelector('#color'),
	brushSize : 5
};

var renderSystem = function (obj, elem, action) {
	//obj -> change
	obj[elem] = action;
	console.log(system);
};

var switchTool = function (el) {
	if (el.id == 'brush') {
		console.log ('brush');
		return 'brush'
	} else if (el.id == 'notbrush') {
		console.log ('not brush');
		return 'notbrush'
	}
};

var switchSize = function (list) {
	return list.value
};

var clicker = function (evt) {
	if (evt.target.classList.contains('toolButton') == true) {
		//console.log (`Выбран инструмент ${evt.target.id}`);
		//switchTool(evt.target);
		console.log(system);
		renderSystem (system, 'currentTool', switchTool (evt.target));
	} else if (evt.target.id == 'sizeSelect') {
		renderSystem (system, 'brushSize', switchSize(evt.target));
	} else if (evt.target.id == 'color') {
		//console.log (`Выбран инструмент color`);
	}
};



var startDraw = function (evt) {
	//зафиксировать нач коорд
	//начать процесс рисования
	if (system.currentTool == 'brush') {
		draw (evt);
	}

};

var endDraw = function (evt) {
	console.log('end');
	canvas.onmousemove = null;
};

var draw = function (evt) {
	canvas.onmousemove = function (evt) {
		ctx.fillRect (xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
	}
};

canvas.addEventListener ('mousemove', getCoordinates);
canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);
window.addEventListener ('click', clicker);

var addZero = function (num) {
	if (num <= 9) {
		return num = '0' + num;
	} else {
		return num;
	}
}

function start () {
	window.setInterval(timer, 1000);
}

var canv = document.querySelector('.canv');
var dateElem = document.createElement('p');
dateElem.class = 'clock';
var date = new Date();
var newDate = `${addZero(date.getHours())} : ${addZero(date.getMinutes())} : ${addZero(date.getSeconds())}`;
dateElem.innerHTML = newDate;
canv.appendChild(dateElem);

function timer () {
	var date = new Date();
	var newDate = `${addZero(date.getHours())} : ${addZero(date.getMinutes())} : ${addZero(date.getSeconds())}`;
	dateElem.innerHTML = newDate;
}

start();


//ctx.fillRect (x0, y0, width(px), height(px));

// ctx.fillRect (0, 0, 100, 100);

// ctx.fillStyle = 'white';
// ctx.fillRect (50, 50, 100, 100);

//ctx.fillStyle = '#7700ff';
//ctx.fillRect (200, 200, 100, 100);

// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.fillStyle = 'blue';

// ctx.moveTo (100, 100);
// ctx.lineTo (300, 300);
// ctx.moveTo (100, 100);
// ctx.lineTo (300, 100);
// ctx.moveTo (300, 100);
// ctx.lineTo (300, 300);

// ctx.rect (40,100, 50, 50);
// ctx.fill ();
// ctx.stroke ();



//canvas.addEventListener ('click', function (evt) {console.log (evt)} );
