(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=c(o);fetch(o.href,i)}})();const p="/code-js-tictactoe/assets/place-ab7f6ea9.wav",m="/code-js-tictactoe/assets/announce-828a437c.wav",g=`
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
`;let n="x",s=[];const v=function(e){return e==="x"?"o":"x"},h=function(e){s.forEach(t=>{t.style.cursor="url('/images/"+e+"-100.png') 25 25, url('images/"+e+"-100.png') 25 25, auto"})},y=function(){const e=document.querySelector(`#${n}-player`);document.querySelectorAll("#control .part").forEach(c=>c.classList.remove("selected")),e.classList.add("selected")},d=function(e){const t=document.querySelector("#outcome");t.innerText=e,t.classList.add("display"),s.forEach(c=>{c.style.cursor="default",c.replaceWith(c.cloneNode(!0))}),u(m)},b=function(){let e=0;return s.forEach(t=>{t.dataset.assignment!==void 0&&e++}),e},l=function(){let e=!1,t="";return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach(r=>{["x","o"].forEach(o=>{e=r.every(i=>s[i].dataset.assignment===o),e&&(t=o)})}),t},k=function(){l()!==""&&d("The WINNER is player "+l().toUpperCase()),b()===9&&l()===""&&d("This game is a DRAW!")},u=function(e){new Audio(e).play()},f=function(e){let t=document.createElement("img");t.src=`images/${n}-100.png`,t.alt=n,e.target.appendChild(t),e.target.dataset.assignment=n,e.target.removeEventListener("click",f),u(p),n=v(n),h(n),y(),k()},E=function(e){e.innerHTML=g,document.querySelector("#reset").addEventListener("click",()=>{window.location.reload()}),s=document.querySelectorAll(".block"),s.forEach(c=>{c.addEventListener("click",f)})},w=`
    <header id="header">
        <h1>TicTacToe</h1>
    </header>
`,L=`
    <footer>
        <div>
            Because of the simplicity of tic-tac-toe, it is often used as a pedagogical tool for teaching the concepts
            of good sportsmanship and the branch of artificial intelligence that deals with the searching of game trees.
            <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Read More On Wikipedia</a>
        </div>
        <div class="github">
            <a href="https://github.com/mortolian/code-js-tictactoe" target="_blank">
                <img src="images/github.png" alt="Code Available on GitHub." title="Source available on GitHub.">
            </a>
        </div>
        <div>Copyright &copy; 2023 Mortolian</div>
    </footer>
`;document.querySelector("#app").innerHTML=`
<div id="wrapper">
    ${w}
    <div id="tictactoe"></div>
    ${L}
</div>
`;E(document.querySelector("#tictactoe"));
