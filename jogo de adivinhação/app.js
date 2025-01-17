alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 700;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Chute um número entre 0 e ${numeroMaximo}`);

    if(numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que o ${chute}`);
        }   else {
        alert(`O número secreto é menor que o ${chute}`);
        }

        tentativas++;
    }
}

let palavrasTentativas = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns, você acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavrasTentativas}`);

console.log("Chute: " + chute + " - Número secreto: " + numeroSecreto);
console.log("Fim do jogo");