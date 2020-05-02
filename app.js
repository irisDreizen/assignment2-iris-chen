var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var interval2;



var monster1=new Object();
monster1.x1=12;
monster1.y1=12;

var monster2=new Object();
monster2.x1=1;
monster2.y1=1;

var monster3=new Object();
monster3.x1=12;
monster3.y1=1;

var monster4=new Object();
 monster4.x1=1;
 monster4.y1=12;

 var monsters;
var pacman_remain = 5;

var randomNum3=Math.random();

var numOfMonster=3;
var numOfMonster2;
var food_remain;
var color_5_score;
var color_15_score;
var color_25_score;
var up;
var down;
var left;
var right;
var timeLeft;
var monsterInterval;

function initialize(upK,downK, leftK, rightK,ballsNum,firstCo,secondCo,thirdCo,time,mostersNum){
	up=upK;
	down=downK;
	left=leftK;
	right=rightK;
	food_remain=ballsNum;
	color_5_score=firstCo;
	color_15_score=secondCo;
	color_25_score=thirdCo;
	timeLeft=time;
	numOfMonster2=mostersNum;
}

function startGame(){
	context = canvas.getContext("2d");
	Start();
}

var x=document.getElementById("myAudio");
//
// function playAudio() {
// 	x.play();
//
// }

function Start() {
	//playAudio();

	//board = new Array();
	board=[
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,0,0,0,0,4,4,4,0,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,4,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,4,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,4,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,4,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,4,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4]];


		score = 0;
	//test
	pac_color = "yellow";
	var cnt = 100;

	start_time = new Date();


	if(numOfMonster2==1){
		monsters=[monster1];
	}
	else if (numOfMonster2==2){
		monsters=[monster1,monster2];
	}
	else if(numOfMonster2==3){
		monsters=[monster1,monster2,monster3];
	}
	else if(numOfMonster2==4){
		monsters=[monster1,monster2,monster3,monster4];
	}

	var cellPac=findRandomEmptyCell(board);
	while(cellPac[0]==1 || cellPac[0]==12 || cellPac[1]==1 ||cellPac[1]==12) {
		 cellPac=findRandomEmptyCell(board);

	}
		shape.i = cellPac[0];
		shape.j = cellPac[1];
		board[shape.i][shape.j]=2;

		for(var f=0; f<numOfMonster2; f++ ){
			board[monsters[f].x1][monsters[f].x1]=9;
		}

	// 				shape.j = j;
	// 				pacman_remain--;
	// 				board[i][j] = 2;

	// for(var b=0; b<14; b++){
	// 	board[b] = new Array();
	// 	for(var v=0; v<14; v++){
	// 		board[b][v]=0;
	// 	}
	//
	// }


	// for (var i = 0; i < 14; i++) {
	// 	//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
	// 	for (var j = 0; j < 14; j++) {
	//
	//
	// 		if (i == 8 && j == 8) {//monster 1
	// 			if (numOfMonster > 0) {
	// 				board[i][j] = 9;
	// 				numOfMonster--;
	// 			}
	// 		} else if (i == 1 && j == 1) {//monster 2
	// 			if (numOfMonster > 0) {
	// 				board[i][j] = 9;
	// 				numOfMonster--;
	// 			}
	//
	// 		} else if (i == 8 && j == 1) {
	// 			if (numOfMonster > 0) {
	// 				board[i][j] = 9;
	// 				numOfMonster--;
	// 			}//monster 3
	// 		// } else if (i == 1 && j == 8) {
	// 		// 	if (numOfMonster > 0) {
	// 		// 		board[i][j] = 9;
	// 		// 		numOfMonster--;
	// 		// 	}
	//
	//
	//
	// 		}else if (
	// 			 ((i == 3 && j == 3) ||
	// 			(i == 3 && j == 4) ||
	// 			   (i == 7 && j == 2) ||(i == 7 && j == 3))
	// 		) {
	// 			board[i][j] = 4;
	// 		} else {
	// 			var randomNum = Math.random();
	// 			if (randomNum <= (1.0 * food_remain) / cnt ) {
	// 				food_remain--;
	// 				var randomNum2 = Math.random();
	// 				if (randomNum2 >= 0.9) {
	// 					board[i][j] = 8;
	// 				} else if (randomNum2 >= 0.7)
	// 					board[i][j] = 7;
	// 				else {
	// 					board[i][j] = 1;
	// 				}
	// 			}
	// 			else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt  ) {
	// 				shape.i = i;
	// 				shape.j = j;
	// 				pacman_remain--;
	// 				board[i][j] = 2;
	// 			}else {
	// 				board[i][j] = 0;
	//
	// 			}
	// 			cnt--;
	// 		}
	// 	}
	// }


	var food5=food_remain*0.6;
	var food15=food_remain*0.3;
	var food25=food_remain*0.1;

	while (food5 > 0) {
		var emptyCell = findRandomEmptyCell(board);
		while(cellPac[0]==1 || cellPac[0]==12 || cellPac[1]==1 ||cellPac[1]==12) {
			 cellPac=findRandomEmptyCell(board);

		}
		board[emptyCell[0]][emptyCell[1]] = 1;
		food5--;
	}
	while (food15 > 0) {
		var emptyCell = findRandomEmptyCell(board);
		while(cellPac[0]==1 || cellPac[0]==12 || cellPac[1]==1 ||cellPac[1]==12) {
			 cellPac=findRandomEmptyCell(board);

		}
		board[emptyCell[0]][emptyCell[1]] = 7;
		food15--;
	}
	while (food25> 0) {
		var emptyCell = findRandomEmptyCell(board);
		while(cellPac[0]==1 || cellPac[0]==12 || cellPac[1]==1 ||cellPac[1]==12) {
			 cellPac=findRandomEmptyCell(board);

		}
		board[emptyCell[0]][emptyCell[1]] = 8;
		food25--;
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


	interval = setInterval(UpdatePosition, 150);
	monsterInterval=setInterval(UpdatePositionMonster,400);

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

	var i = Math.floor(Math.random() * 13 + 1);
	var j = Math.floor(Math.random() * 13 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 13 + 1);
		j = Math.floor(Math.random() * 13 + 1);
		console.log("my i is: " + i+ " and my j is:"+ j);
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
	for (var i = 0; i < 14; i++) {
		for (var j = 0; j < 14; j++) {
			var center = new Object();

			center.x = i * 30 + 20;
			center.y = j * 30 + 20;


			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 10, angle.x * Math.PI, angle.y * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 3, center.y - 5, 2, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();

			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = getFirstColor(); //color
				context.fill();
			} else if (board[i][j] == 7) {
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = getSecondColor(); //color
				context.fill();
			} else if (board[i][j] == 8) {
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = getThirdColor(); //color
				context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 10, center.y - 10, 30, 30);
				context.fillStyle = "grey"; //color
				context.fill();
			}
			else if (board[i][j] == 9) {
				var img = document.getElementById("ghost");
				context.drawImage(img, center.x - 10, center.y - 10, 20, 20);


			}
		}

	}

}


var temp1;
var temp2;
var temp3;
var random4;

function moveRight(monster) {
	if (monster.x1 + 1 < 14 && board[monster.x1 + 1][monster.y1] != 4)
		return 4;//right
	else return 0;
}

function moveLeft(monster) {
	if (monster.x1 - 1 >= 0 && board[monster.x1 - 1][monster.y1] != 4)
		return 3;//go left
	else return 0;
}
function moveUp(monster) {
	if (monster.y1 - 1 >= 0 && board[monster.x1][monster.y1 - 1] != 4)
		return 1;
	else return 0;//go up

}
function moveDown(monster) {
	if (monster.y1 + 1 < 14 && board[monster.x1][monster.y1+1] != 4)
		return 2;
	else return 0;//go down

}

function whichDirection(monster) {
	random4=Math.floor(Math.random()*11);//integer from 0 to 10
		if (monster.x1 == shape.i && monster.y1 > shape.j) {//same row up or right first
			if (random4 <= 5) {
				if (moveUp(monster) == 1) {
					return 1;
				} else if (random4 >= 3) {
					if (moveRight(monster) == 4) {
						return 4;
					} else if (moveLeft(monster) == 3) {
						return 3;
					} else return 2;

				}
			}
			else {//>5
				if(moveRight(monster)==4) {
					return 4;
				}
				else if(random4>=7) {
					if (moveUp(monster) == 1)
						return 1;
				}
					else if (moveLeft(monster)==3) {
					return 3;
				}
					else return 2;
			}


		}



	else if (monster.x1 == shape.i && monster.y1 < shape.j ) {//same row
			random4=Math.floor(Math.random()*11);//integer from 0 to 10

			if (random4 <= 5) {
				if(moveDown(monster)==2) {
					return 2;
				}
				else if(random4>=3) {
					if (moveRight(monster) == 4) {
						return 4;
						}
					}
					else if (moveLeft(monster)==3) {
					return 3;
					}
					else return 1;

			}
			else {//>5
				if (moveRight(monster) == 4) {
					return 4;
				} else if (random4 >= 7) {
					if (moveDown(monster) == 2) {
						return 2;
					} else if (moveLeft(monster) == 3) {
						return 3;
					} else return 1;
				}
			}
			}


	else if (monster.y1 == shape.j && monster.x1 > shape.i) {//same col

			random4=Math.floor(Math.random()*11);//integer from 0 to 10

			if (random4 <= 5) {
				if(moveLeft(monster)==3) {
					return 3;
				}
				else if(random4>=3) {
					if (moveUp(monster) == 1) {
						return 1;
					} else if (moveDown(monster) == 2) {
						return 2;
					} else return 4;
				}

			}
			else {//>5
				if(moveUp(monster)==1) {
					return 1;
				}
				else if(random4>=7) {
					if (moveLeft(monster) == 3) {
						return 3;
					} else if (moveDown(monster) == 2) {
						return 2;
					} else return 4;
				}
			}

		} else if (monster.y1 == shape.j && monster.x1 < shape.i) {//same col

			random4 = Math.floor(Math.random() * 11);//integer from 0 to 10

			if (random4 <= 5) {
				if (moveRight(monster) == 4) {
					return 4;
				} else if (random4 >= 3) {
					if (moveUp(monster) == 1) {
						return 1;
					}
				} else if (moveDown(monster) == 2) {
					return 2;
				} else
					return 3;


			} else {//>5
				if (moveUp(monster) == 1) {
					return 1;
				} else if (random4 >= 7) {
					if (moveRight(monster) == 4) {
						return 4;
					} else if (moveDown(monster) == 2) {
						return 2;
					} else return 3;
				}
			}
		}



	else if(monster.y1 > shape.j && monster.x1 > shape.i){//up or left first
			random4=Math.floor(Math.random()*11);//integer from 0 to 10

			if (random4 <= 5) {
				if(moveUp(monster)==1)
					return 1;
				else if(random4>=3) {
					if (moveLeft(monster) == 3)
						return 3;
				}
					else if (moveDown(monster)==2) {
					return 2;
				}
					else return 4;

			}
			else {//>5
				if(moveLeft(monster)==3)
					return 3;
				else if(random4>=7) {
					if (moveUp(monster) == 1)
						return 1;
				}
					else if (moveDown(monster)==2) {
						return 2;
				}
					else return 4;
			}

		}
	else if(monster.y1 < shape.j && monster.x1 > shape.i){//left or down first
			random4=Math.floor(Math.random()*11);//integer from 0 to 10

			if (random4 <= 5) {
				if (moveLeft(monster) == 3) {
					return 3;
				} else if (random4 >= 3) {
					if (moveDown(monster) == 2)
						return 2;
				} else if (moveUp(monster) == 1) {
					return 1;
				} else return 4;
			}


			else {//>5
				if(moveDown(monster)==2)
					return 3;
				else if(random4>=7) {
					if (moveLeft(monster) == 3) {
						return 3;
					} else if (moveRight(monster) == 4) {
						return 4;
					} else return 1;
				}
			}


		}///
	else if(monster.y1 < shape.j && monster.x1 < shape.i){//down or right first
			random4=Math.floor(Math.random()*11);//integer from 0 to 10

			if (random4 <= 5) {
				if(moveDown(monster)==2) {
					return 2;
				}
				else if(random4>=3) {
					if (moveRight(monster) == 4)
						return 4;
					}
					else if (moveUp(monster)==1) {
						return 1;
					}
					else return 3;

			}
			else {//>5
				if (moveRight(monster) == 4) {
					return 4;
				} else if (random4 >= 7) {
					if (moveDown(monster) == 2)
						return 2;
				} else if (moveUp(monster) == 1) {
					return 1;
				} else return 3;
			}
			}


	else if(monster.y1 > shape.j && monster.x1 < shape.i){//up or right first
			random4=Math.floor(Math.random()*11);//integer from 0 to 10

			if (random4 <= 5) {
				if(moveUp(monster)==1)
					return 1;
				else if(random4>=3) {
					if (moveRight(monster) == 4) {
						return 4;
					}
					else if (moveLeft(monster) == 3) {
						return 3;
					}
					else return 2;
				}

			}
			else {//>5
				if(moveRight(monster)==4)
					return 4;
				else {
					if(random4>=7) {
						if (moveUp(monster) == 1)
							return 1;
						else if (moveDown(monster) == 2) {
							return 2;
						} else return 3;
					}
				}
			}


		}



}



var candys=new Array();

var candy1=new Object();
var candy2=new Object();

var candy3=new Object();
 candy1.bool=false;
candy1.num=0;

candy2.bool=false;
candy2.num=0;

candy3.bool=false;
candy3.num=0;

var candy4=new Object();
candy4.bool=false;
candy4.num=0;
candys=[candy1,candy2,candy3,candy4];




var directions=new Array();

function UpdatePositionMonster() {
	 //move=Math.floor(Math.random() * 10);

	for(var o=0; o<numOfMonster2; o++){
		if(candys[o].bool==true) {
			board[monsters[o].x1][monsters[o].y1] = candys[o].num;
		}
		else {
			board[monsters[o].x1][monsters[o].y1] = 0;
		}
		directions[o]=whichDirection(monsters[o]);
	}


	for(var c=0; c<numOfMonster2; c++) {
		if (directions[c] == 3) {//left
			monsters[c].x1--;
			if(board[monsters[c].x1][monsters[c].y1]==1 || board[monsters[c].x1][monsters[c].y1]==7 || board[monsters[c].x1][monsters[c].y1]==8){
				candys[c].num=board[monsters[c].x1][monsters[c].y1];
				candys[c].bool=true;
			}

		}
		else if (directions[c] == 4) {//right
			monsters[c].x1++;
			if(board[monsters[c].x1][monsters[c].y1]==1 || board[monsters[c].x1][monsters[c].y1]==7 || board[monsters[c].x1][monsters[c].y1]==8){
				candys[c].num=board[monsters[c].x1][monsters[c].y1];
				candys[c].bool=true;
			}
		}
		else if (directions[c] == 1) {//up
			monsters[c].y1--;
			if(board[monsters[c].x1][monsters[c].y1]==1 || board[monsters[c].x1][monsters[c].y1]==7 || board[monsters[c].x1][monsters[c].y1]==8){
				candys[c].num=board[monsters[c].x1][monsters[c].y1];
				candys[c].bool=true;
			}
		}
		else if (directions[c] == 2) {//down
			monsters[c].y1++;
			if(board[monsters[c].x1][monsters[c].y1]==1 || board[monsters[c].x1][monsters[c].y1]==7 || board[monsters[c].x1][monsters[c].y1]==8){
				candys[c].num=board[monsters[c].x1][monsters[c].y1];
				candys[c].bool=true;
			}
		}
	}

	for(var m=0; m<numOfMonster2; m++){
		board[monsters[m].x1][monsters[m].y1]=9;
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
		if (x == 1) {//up
			if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
				shape.j--;
				angle.x = 1.6;
				angle.y = 3.35;

			}
		}
		if (x == 2) {//down
			if (shape.j < 14 && board[shape.i][shape.j + 1] != 4) {
				shape.j++;
				angle.x = 0.7;
				angle.y = 2.3;
			}
		}
		if (x == 3) {//left
			if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
				shape.i--;
				angle.x = 1.1;
				angle.y = 2.9;
			}
		}
		if (x == 4) {//right
			if (shape.i < 14 && board[shape.i + 1][shape.j] != 4) {
				shape.i++;
				angle.x = 0.15;
				angle.y = 1.85;
			}
		}
		if (board[shape.i][shape.j] == 1) {
			score=score+5;
		}
		else if(board[shape.i][shape.j] == 7){
			score=score+15;

		}
		else if(board[shape.i][shape.j] == 8){
			score=score+25;

		}
		board[shape.i][shape.j] = 2;
		var currentTime = new Date();
		time_elapsed = (currentTime - start_time) / 1000;
		if(pacman_remain==0){
			window.alert("Loser!");
		}

			for(var m=0; m<numOfMonster2; m++){
				if(monsters[m].x1==shape.i && monsters[m].y1==shape.j){
					score=score-10;

					//audio failed
					//startGame();
				}
			}

		 if (score >= 20 && time_elapsed <= 10) {
			pac_color = "green";
		}
		if (score == 1000) {
			window.clearInterval(interval);
			window.alert("Game completed");
		} else {


			//UpdatePositionMonster();

			Draw();
		}
	}


