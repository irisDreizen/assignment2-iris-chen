var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

var randomNum3=Math.random();


$(document).ready(function() {
	context = canvas.getContext("2d");
	Start();
});

function Start() {
	board = new Array();
	score = 0;
	//test
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = 50;
	var pacman_remain = 1;
	start_time = new Date();

	for (var i = 0; i < 10; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) {



			 if (
				 ((i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) || (i == 6 && j == 4) ||
				(i == 6 && j == 1) || (i == 8 && j == 9) || (i == 2 && j == 9) ||
				 (i == 6 && j == 8) ||(i == 5 && j == 4) || (i == 7 && j == 2) ||(i == 8 && j == 1))
			) {
				board[i][j] = 4;
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt ) {
					food_remain--;
					var randomNum2=Math.random();
					if(randomNum2>=0.9){
						board[i][j]=8;
					}
					else if(randomNum2>=0.7)
						board[i][j] = 7;
					else
					{
						board[i][j] = 1;
					}
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt  ) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				}else {
					randomNum3 = Math.random();
					if (randomNum3 < 0.6) {
						board[i][j] = 9;
					} else {
						board[i][j] = 0;
					}
				}
				cnt--;
			}
		}
	}

	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
}

// function borders() {
// 	bordersBoard = new Array();
// 	for (var i = 0; i < 32; i++) {
// 		bordersBoard[i] = new Array();
// 		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
// 		for (var j = 0; j < 32; j = j + 4) {
// 			bordersBoard[i][j] = 4;
// 		}
//
// 	}
// }



function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {//UP
		return 1;
	}
	if (keysDown[40]) {//down
		return 2;
	}
	if (keysDown[37]) {//left
		return 3;
	}
	if (keysDown[39]) {//right
		return 4;
	}
}

function Draw() {
	//borders();
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			// if (bordersBoard[i][j] == 4) {
			// 	context.beginPath();
			// 	context.rect(center.x - 30, center.y - 30, 60, 60);
			// 	context.fillStyle = "grey"; //color
			// 	context.fill();
			// }
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 30, angle.x * Math.PI, angle.y * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 9, center.y - 11, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();

			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "red"; //color
				context.fill();
			} else if (board[i][j] == 7) {
				context.beginPath();
				context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
				context.fillStyle = "blue"; //color
				context.fill();
			} else if (board[i][j] == 8) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "green"; //color
				context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			} else if (board[i][j] == 9) {
				context.beginPath();
				var img = new Image();
				img.src = "monster1.png";
				context.drawImage(img, center.x, center.y, 4, 4);


			}
		}

	}
}
		// context.beginPath();
		// context.rect(center.x - 30, center.y - 30, 60, 60);
		// context.fillStyle = "grey"; //color
		// context.fill();




	var angle = new Object();
	angle.x = 0.15;
	angle.y = 1.85;


	function UpdatePosition() {
		board[shape.i][shape.j] = 0;
		var x = GetKeyPressed();
		if (x == 1) {
			if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
				shape.j--;
				angle.x = 1.6;
				angle.y = 3.35;

			}
		}
		if (x == 2) {//down
			if (shape.j < 10 && board[shape.i][shape.j + 1] != 4) {
				shape.j++;
				angle.x = 0.7;
				angle.y = 2.3;
			}
		}
		if (x == 3) {
			if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
				shape.i--;
				angle.x = 1.1;
				angle.y = 2.9;
			}
		}
		if (x == 4) {//right
			if (shape.i < 10 && board[shape.i + 1][shape.j] != 4) {
				shape.i++;
				angle.x = 0.15;
				angle.y = 1.85;
			}
		}
		if (board[shape.i][shape.j] == 1) {
			score++;
		}
		board[shape.i][shape.j] = 2;
		var currentTime = new Date();
		time_elapsed = (currentTime - start_time) / 1000;
		if (score >= 20 && time_elapsed <= 10) {
			pac_color = "green";
		}
		if (score == 50) {
			window.clearInterval(interval);
			window.alert("Game completed");
		} else {
			Draw();
		}
	}


