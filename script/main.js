window.addEventListener("load", function () {
	
	var boxSize = 30;
	
	var mainFieldCol = 10;
	var mainFieldRow = 20;
	
	var smallBoxCol = 4;
	var smallBoxRow = 4;
	
//----------------------------------------------------------
// Создание игрового пространства
//----------------------------------------------------------

	var message = document.getElementById("message");
	var gameBoard = document.getElementById("gameBoard");
	var nextBlock = document.getElementById("nextBlock");
	
	for (var row = 0; row < mainFieldRow; row++) {
		for (var col = 0; col < mainFieldCol; col++) {
			var div = document.createElement("div");
			div.className = "box";
			gameBoard.appendChild(div);
		}
	}

	for (var row = 0; row < smallBoxRow; row++) {
		for (var col = 0; col < smallBoxCol; col++) {
			var div = document.createElement("div");
			div.className = "box";
			nextBlock.appendChild(div);
		}
	}

//----------------------------------------------------------
// Установка начальных значений
//----------------------------------------------------------

	var gameBoardArray = gameBoard.getElementsByClassName("box");
	var nextBlockArray = nextBlock.getElementsByClassName("box");

	var field = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];

//----------------------------------------------------------
// Отрисовка текущего состояния игрового поля
//----------------------------------------------------------

	function mainFieldRedraw() {
		var currentBlock = 0;
		for (var row = 0; row < mainFieldRow; row++) {
			for (var col = 0; col < mainFieldCol; col++) {
				//gameBoardArray[currentBlock].innerHTML = field[row][col];
				switch (field[row][col]) {
					case 0:
						gameBoardArray[currentBlock++].className = "box";
						break;
					case 1:
						gameBoardArray[currentBlock++].className = "box cyan";
						break;
					case 2:
						gameBoardArray[currentBlock++].className = "box yellow";
						break;
					case 3:
						gameBoardArray[currentBlock++].className = "box purple";
						break;
					case 4:
						gameBoardArray[currentBlock++].className = "box green";
						break;
					case 5:
						gameBoardArray[currentBlock++].className = "box red";
						break;
					case 6:
						gameBoardArray[currentBlock++].className = "box blue";
						break;
					case 7:
						gameBoardArray[currentBlock++].className = "box orange";
						break;
					default:
						gameBoardArray[currentBlock++].className = "box";
				};
			};
		};
	};

	function nextBlockRedraw() {
		var currentBlock = 0;
		for (var row = 0; row < smallBoxRow; row++) {
			for (var col = 0; col < smallBoxCol; col++) {
				nextBlockArray[currentBlock].innerHTML = figJ[x][row][col];
				switch (figJ[x][row][col]) {
					case 1:
						nextBlockArray[currentBlock++].className = "box cyan";
						break;
					case 2:
						nextBlockArray[currentBlock++].className = "box yellow";
						break;
					case 3:
						nextBlockArray[currentBlock++].className = "box purple";
						break;
					case 4:
						nextBlockArray[currentBlock++].className = "box green";
						break;
					case 5:
						nextBlockArray[currentBlock++].className = "box red";
						break;
					case 6:
						nextBlockArray[currentBlock++].className = "box blue";
						break;
					case 7:
						nextBlockArray[currentBlock++].className = "box orange";
						break;
					default:
						nextBlockArray[currentBlock++].className = "box";
				};
			};
		};
	};
	
//----------------------------------------------------------
	var nextBlock = {
		type: "figL",
		color: "red",
		locationX: 1,
		locationY: 1
	};

	console.log(nextBlock);
//----------------------------------------------------------
	function Block(type, locationX, locationY, color) {
		var blockTypes = ["none", "figQ", "figI", "figS", "figZ", "figL", "figJ", "figT" ];
		var clockColors = ["none", "cyan", "yellow", "purple", "green", "red", "blue", "orange" ];
		this.type = blockTypes[type];
		this.color = clockColors[color];
		this.locationX = locationX;
		this.locationY = locationY;
	}

	var nextBlock1 = new Block(4, 1, 1, 1);
	var nextBlock2 = new Block(5, 1, 1, 2);
	
	console.log(nextBlock1);
	console.log(nextBlock2);

//----------------------------------------------------------
// Анимация очистки игрового поля
//----------------------------------------------------------

	var row = 0;
	var col = 0;

	function tmr1() {
		if(col == mainFieldCol) {col = 0; row++; }
		if(row == mainFieldRow) {row = 0; }
		field[row][col] = Math.floor(Math.random() * 7);
		mainFieldRedraw();
		col++;
	};
	
	var col = 0;

	function tmr2() {
		for (var col = 0; col < mainFieldCol; col++) {
			field[row][col] = Math.floor(Math.random() * 7);
			mainFieldRedraw();
		};
		row++;
		if(row == mainFieldRow) {row = 0; };
	};
	
	//var timerID = setInterval(tmr1, 100);
	//var timerID = setInterval(tmr2, 100);


//----------------------------------------------------------
// Добавить обработчик нажатия клавиш
//----------------------------------------------------------

	addEventListener("keydown", function (event) {

		switch (event.keyCode) {
			case 32:
				message.innerHTML = "Spacebar Button!";
				break;
			case 37:
			case 65:
				message.innerHTML = "Left Button!"; tmr1();
				break;
			case 38:
			case 87:
				message.innerHTML = "Up Button!";
				break;
			case 39:
			case 68:
				message.innerHTML = "Right Button!"; tmr2();
				break;
			case 40:
			case 83:
				message.innerHTML = "Down Button!";
				break;
			case 19:
				message.innerHTML = "Pause Button!";
				break;
			default:
				message.innerHTML = "";
		}
		//console.log(event.keyCode);
	});
});