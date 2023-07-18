console.log('TicTacToe Logic Loaded...');

let blocks = document.querySelectorAll('.block');
let resetButton = document.querySelector('#reset');
let playerTurn = 'x';

// Toggle the player
const togglePlayer = function () {
    playerTurn = playerTurn === 'x' ? 'o' : 'x';
    toggleUserTurnIndicator(playerTurn);
}

// Toggle the cursor
const toggleCursor = function () {
    blocks.forEach(block => {
        block.style.cursor = "url('../images/" + playerTurn + "-100.png') 25 25, auto";
    });
}

// Draw players action on the board
const drawOn = function (event) {
    event.target.innerHTML = "<img src='images/" + playerTurn + "-100.png'/>";
    event.target.dataset.assignment = playerTurn;
    event.target.removeEventListener('click', drawOn);
    togglePlayer();
    toggleCursor();
    gameStateCheck();
}

// Announce the outcome of the game.
const announceOutcome = function(message) {
    const outcomeElm = document.querySelector('#outcome');
    outcomeElm.innerText = message;
    outcomeElm.classList.add('display');
    blocks.forEach(block => {
        block.style.cursor = 'default';
        block.replaceWith(block.cloneNode(true));
    });
}

// Toggle user turn indicator
const toggleUserTurnIndicator = function(player) {
    const playerElm = document.querySelector('#' + player + '-player');
    const playerElms = document.querySelectorAll('#control .part');
    playerElms.forEach(elm => elm.classList.remove('selected'));
    playerElm.classList.add('selected');
}

// Rounds played
const roundsPlayed = function() {
    let roundsPlayed = 0;

    blocks.forEach(block => {
        if (block.dataset.assignment !== undefined) {
            roundsPlayed++;
        }
    });

    return roundsPlayed;
}

// Check for winner
const checkForWinner = function() {
    let winner = false;
    let returnPlayer = '';

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // Check if there are winning combinations
    winningCombinations.forEach(combination => {
        ['x', 'o'].forEach(player => {
            winner = combination.every(block => {
                return blocks[block].dataset.assignment === player;
            });

            if (winner) {
                returnPlayer = player;
            }
        });
    });

    return returnPlayer;
}

// Check the game state to see if there is a draw or a winner.
const gameStateCheck = function () {
    if(checkForWinner() !== '') {
        announceOutcome('The WINNER is player ' + checkForWinner().toUpperCase());
    }
    if(roundsPlayed() === 9 && checkForWinner() === '') {
        announceOutcome('This game is a DRAW!');
    }
}

// Reset the game by reloading the page (kiss)
const resetGame = function () {
    window.location.reload();
}

// Add event listeners for blocks
blocks.forEach(block => {
        block.addEventListener('click', drawOn);
    }
);

// Add event listener for reset button
resetButton.addEventListener('click', resetGame);