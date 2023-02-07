const numeroMenorValor = 1;
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = numeroMenorValor;

const numeroMaiorValor = 1000;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = numeroMaiorValor;

const numeroSecreto = sortearNumero();

function sortearNumero () {

    return parseInt(Math.random() * 1000 + 1);
};

console.log("número sorteado:", numeroSecreto);