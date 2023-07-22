import '../assets/css/tictactoe.component.css';
import placeAudio from '../assets/audio/place.wav'
import announceAudio from '../assets/audio/announce.wav'

const gameboardHtml = `
    <section id="control">
        <div id="x-player" class="part selected">
            <img src="images/x-50.png" alt="X Player"/>
        </div>
        <div id="o-player" class="part">
            <img src="images/o-50.png" alt="O Player"/>
        </div>
        <div id="reset" class="part reset cursor-pointer">
            <span>New Game</span>
        </div>
    </section>
    <section id="outcome" class="outcome"></section>    
    <section id="game">
        <div id="board" style="box-shadow: 0px 20px 40px -25px rgb(127, 3, 12, 1);">
            <div id="block-0" class="block"></div>
            <div id="block-1" class="block"></div>
            <div id="block-2" class="block"></div>
            <div id="block-3" class="block"></div>
            <div id="block-4" class="block"></div>
            <div id="block-5" class="block"></div>
            <div id="block-6" class="block"></div>
            <div id="block-7" class="block"></div>
            <div id="block-8" class="block"></div>
        </div>
    </section>
`;

let activePlayer = 'x';
let blocks = [];

const togglePlayer = function (player) {
    return player === 'x' ? 'o' : 'x';
};

const toggleMouseCursorStyle = function (player) {
    blocks.forEach(block => {
        block.style.cursor = "url('/images/" + player + "-100.png') 25 25, url('images/" + player + "-100.png') 25 25, auto";
    });
};

const toggleUserTurnIndicator = function () {
    const playerElement = document.querySelector(`#${activePlayer}-player`);
    const playerElements = document.querySelectorAll('#control .part');
    playerElements.forEach(elm => elm.classList.remove('selected'));
    playerElement.classList.add('selected');
};

const announceOutcome = function (message) {
    const outcomeElement = document.querySelector('#outcome');
    outcomeElement.innerText = message;
    outcomeElement.classList.add('display');
    blocks.forEach(block => {
        block.style.cursor = 'default';
        block.replaceWith(block.cloneNode(true));
    });
    playSound(announceAudio);
};

const roundsPlayed = function () {
    let roundsPlayed = 0;

    blocks.forEach(block => {
        if (block.dataset.assignment !== undefined) {
            roundsPlayed++;
        }
    });

    return roundsPlayed;
};

const checkForWinner = function () {
    let winner = false;
    let returnPlayer = '';

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winningCombinations.forEach(combination => {
        ['x', 'o'].forEach(player => {
            winner = combination.every(block => {
                return blocks[block].dataset.assignment === player;
            })

            if (winner) {
                returnPlayer = player;
            }
        })
    })

    return returnPlayer;
};

const gameStateCheck = function () {
    if (checkForWinner() !== '') {
        announceOutcome('The WINNER is player ' + checkForWinner().toUpperCase());
    }
    if (roundsPlayed() === 9 && checkForWinner() === '') {
        announceOutcome('This game is a DRAW!');
    }
};

const playSound = function(audioFile) {
    new Audio(audioFile).play();
};

const drawOnBlock = function (event) {
    let image = document.createElement('img');
    image.src = `images/${activePlayer}-100.png`;
    image.alt = activePlayer;
    event.target.appendChild(image);
    event.target.dataset.assignment = activePlayer;
    event.target.removeEventListener('click', drawOnBlock);
    playSound(placeAudio);
    activePlayer = togglePlayer(activePlayer);
    toggleMouseCursorStyle(activePlayer);
    toggleUserTurnIndicator();
    gameStateCheck();
};

const start = function (element) {
    element.innerHTML = gameboardHtml;

    const resetElement = document.querySelector('#reset')
    resetElement.addEventListener('click', () => {
        window.location.reload();
    })

    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
            block.addEventListener('click', drawOnBlock);
        }
    );
};

export default start;