function verificaSeChuteEhValido(chute) {
    const numero = +chute;

    if (ehUmNumero(numero)) {
        elementoChute.innerHTML += '<div>Não é um número!</div>';

        return;

    };


    if (chuteEhMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>O número precisa ser entre ${numeroMenorValor} e ${numeroMaiorValor}</div>
        `;

        return;
    }


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2 class="acertou">Parabéns você acertou!</h2>
        <h3 class="resultado">O número secreto era : ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número é menor <i class="fa-solid fa-angles-down"></i></div>
    `
    } else {
        elementoChute.innerHTML += `
        <div>O número é maior <i class="fa-solid fa-angles-up"></i></div>
    
    `;
    }
};

function ehUmNumero(numero) {
    return Number.isNaN(numero);
};

function chuteEhMaiorOuMenor(numero) {
    return numero > numeroMaiorValor || numero < numeroMenorValor;
};


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    };
});