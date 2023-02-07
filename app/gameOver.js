
function fimDoJogo (chute) {
    if(chute == 'game over') {
        document.body.innerHTML =
        `
        <h2 class="game-over">GAME OVER</h2>
        <button id="jogar-novamente" class="btn-jogar btn-jogar-fim">Jogar novamente</button>
        `
        document.body.style.backgroundColor =  "#032535";
    }

};