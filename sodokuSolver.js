//create a virtual board

var board=[
	[0, 5, 1, 3, 6, 2, 7, 0, 0],
	[0, 4, 0, 0, 5, 8, 0, 0, 0],
	[0, 0, 0, 4, 0, 0, 0, 2, 5],
	[0, 8, 0, 0, 0, 0, 9, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[7, 0, 5, 0, 0, 0, 0, 8, 0],
	[1, 2, 0, 0, 0, 9, 0, 0, 0],
	[0, 0, 0, 2, 8, 0, 0, 6, 0],
	[0, 0, 8, 5, 3, 4, 2, 9, 0]
]


//finds spot with zero/empty spot
function findEmptySpot(board){
	for(let i = 0; i<9; i++){
		for(let j=0;j<9; j++){
			if(board[i][j]===0){
				return [i,j];
			}
		}
	}
	return [-1,1]
}
console.log(findEmptySpot(board))



//check whether a val is in a row
function checkRow(board,row,val){
	for(let i=0; i<9; i++){
		if(board[row][i]===val){
			return false
		}
	}
	return true
}


//check values in a column
function checkCol(board,col,val){
	for(let i=0;i<board.length;i++){
		if(board[i][col]===val){
			return false;
		}
	}
	return true;
}

function checkSquare(board,row,col,val){
	boxRow=Math.floor(row/3)*3;
	boxCol=Math.floor(col/3)*3;
	for(let r=0;r<3;r++){
		for(let c=0;c<3;c++){
			if(board[boxRow+r][boxCol+c]===val){
				return false
			}
		}
	}
	return true
}

//sums all above functions up
function checkVal(board,row,col,val){
	if(checkRow(board,row,val)&&
		checkCol(board,col,val)&&
		checkSquare(board,row,col,val)
	){
		return true
	}
	return false
}



//solve the sodoku
function solve(board){
	let emptySpot=findEmptySpot(board)
	let row=emptySpot[0]
	let col =emptySpot[1]
	if(row===-1]{
		return board;
	}
	for(let num=0;num<9;num++){
		if(checkVal(board,row,col,num){
			board[row][col]=num
			solve(board)
		}
	}
if(findEmptySpot(board)[0]===-1){
	board[row][col]=0;
}
}







