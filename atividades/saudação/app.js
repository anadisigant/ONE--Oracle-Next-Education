//1. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

//2. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
//   Caso contrário, mostre "Boa semana!".

let nome = prompt("Qual é o seu nome?");
let diaSemana = prompt(`Qual é o dia da semana, ${nome}?`).trim().toLowerCase();
console.log(diaSemana);

if(!diaSemana) {
    alert(`${nome} ,por favor, insira um dia da semana.`); 
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
        alert(`Bom fim de semana, ${nome}!`);
} else {
        alert(`Boa semana, ${nome}!`);
}
