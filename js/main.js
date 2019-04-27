/*----- app's state (variables) -----*/

let board;
let turn = 'X';

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/


/*----- functions -----*/

function init() {
    board = [
    '', '', '',
    '', 'X', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    };

init();