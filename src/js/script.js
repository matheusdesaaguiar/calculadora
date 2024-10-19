let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let resultadoSpan = document.querySelector("#resultado");

const soma = function(a, b) {
    return a + b;
};

const subtracao = function(a, b) {
    return a - b;
};

const divisao = function(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero";
    }
    return a / b;
};

const multiplicacao = function(a, b) {
    return a * b;
};

document.getElementById('btn-operar').addEventListener('click', function() {
    let valor1 = parseFloat(num1.value);
    let valor2 = parseFloat(num2.value);
    let select = document.getElementById('operacao-select');
    let operacaoSelecionada = select.value;
    let resultado;

    if (!operacaoSelecionada) {
        resultado = "Selecione uma operação!";
    } else if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "Insira números válidos!";
    } else {
        switch (operacaoSelecionada) {
            case "soma":
                resultado = soma(valor1, valor2);
                break;
            case "subtracao":
                resultado = subtracao(valor1, valor2);
                break;
            case "divisao":
                resultado = divisao(valor1, valor2);
                break;
            case "multiplicacao":
                resultado = multiplicacao(valor1, valor2);
                break;
        }
    }
    resultadoSpan.textContent = resultado;
});