/*-------------------------------- Constants --------------------------------*/

const LOOKUP = {
    "1" : "grey",
    "-1" : "purple",
    "0": "white"
}




/*-------------------------------- Variables --------------------------------*/

let currPlayer;
let board;
let xScore = 0;
let oScore = 0;
let winner;



/*------------------------ Cached Element References ------------------------*/

const boardEl = document.getElementById("board")



/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener("click",handleClick);



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
    currPlayer = 1;
    board =[ null, null, null,
             null, null, null,
             null, null, null] ;
    winner = null;
    render()
}

function render() {
    board.forEach((el,idx) => {
        const currEl = document.getElementById(idx)
        if (!el)currEl.textContent = 0
        else currEl.textContent = LOOKUP[el]
        currEl.style.backgroundColor = LOOKUP[el]
    })
}

function handleClick(event) {
    if (board[event.target.id]) return;
  board[event.target.id]= currPlayer
  currPlayer *=-1
  winner = checkWinner();
  render()
}

function checkWinner() {
    {

    }
}