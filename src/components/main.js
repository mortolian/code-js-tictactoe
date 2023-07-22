import start from "./tictactoe.js";
import {header} from './ttt.header.js'
import {footer} from './ttt.footer.js'

document.querySelector('#app').innerHTML = `
<div id="wrapper">
    ${header}
    <div id="tictactoe"></div>
    ${footer} 
</div>
`

start(document.querySelector('#tictactoe'))