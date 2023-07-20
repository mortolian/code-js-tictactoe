import './style.css'
import { setupCounter } from './counter.js'
import './tictactoe.js'

document.querySelector('#app').innerHTML = `
<div id="wrapper">
    <header id="header">
        <h1>TicTacToe</h1>
    </header>
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
        <div id="board">
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
        <div id="players"></div>
    </section>
    <footer>
        <div>
            Because of the simplicity of tic-tac-toe, it is often used as a pedagogical tool for teaching the concepts
            of good sportsmanship and the branch of artificial intelligence that deals with the searching of game trees.
            It is straightforward to write a computer program to play tic-tac-toe perfectly or to enumerate the 765
            essentially different positions (the state space complexity) or the 26,830 possible games up to rotations
            and reflections (the game tree complexity) on this space.[1] If played optimally by both players, the game
            always ends in a draw, making tic-tac-toe a futile game.
        </div>
        <div class="github">
            <a href="https://github.com/mortolian/code-js-tictactoe" target="_blank">
                <img src="images/github.png" alt="Code Available on GitHub." title="Source available on GitHub.">
            </a>
        </div>
        <div>Copyright &copy; 2023 Mortolian</div>
    </footer>
`

setupCounter(document.querySelector('#counter'))