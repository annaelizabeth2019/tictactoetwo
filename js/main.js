/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;
let tie;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');


/*----- functions -----*/

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;

    win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;
    turn = turn === 'X' ? 'O' : 'X';
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = `It's ${turn}'s turn!`;
    };

init();