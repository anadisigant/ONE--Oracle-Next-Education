//1. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let saldo = 1000;  // Saldo inicial
let usuarioCadastrado = "João";

let usuario = prompt("Digite seu nome de usuário:");

function exibirSaldo() {
    alert(`Seu saldo atual é: R$ ${saldo}`);
}

if (usuarioCadastrado == usuario) {
    exibirSaldo();

    let operacao = prompt("Você quer fazer um depósito ou um saque? (digite 'depósito' ou 'saque')").toLowerCase();

    if (operacao === "depósito") {
        let valorDeposito;
        do {
            valorDeposito = parseFloat(prompt("Qual o valor do depósito?"));
            if (valorDeposito <= 0) {
                alert("Por favor, insira um valor positivo para o depósito.");
            }
        } while (valorDeposito <= 0);  

        saldo += valorDeposito;
        alert(`Você depositou R$ ${valorDeposito}.`);

    } else if (operacao === "saque") {
        let valorSaque;
        do {
            valorSaque = parseFloat(prompt("Qual o valor do saque?"));
            if (valorSaque <= 0) {
                alert("Por favor, insira um valor positivo para o saque.");
            }
        } while (valorSaque <= 0);  

        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            alert(`Você sacou R$ ${valorSaque}.`);
        } else {
            alert("Saldo insuficiente para o saque.");
        }

    } else {
        alert("Operação inválida. Digite 'depósito' ou 'saque'.");
    }

    exibirSaldo();

    if (saldo > 0) {
        alert("Seu saldo é positivo.");
    } else if (saldo < 0) {
        alert("Seu saldo é negativo.");
    } else {
        alert("Seu saldo é zero.");
    }
} else {
    alert("Usuário não cadastrado.");
}
