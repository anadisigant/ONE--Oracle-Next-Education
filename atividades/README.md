# Resolução de alguns desafios do curso de lógica de programação: mergulhe em programação com JavaScript

1) Mostre um alerta com a mensagem "Boas vindas ao nosso site!"
```js
   alert("Boas vindas ao nosso site!")
```

2) Declare uma variável chamada nome e atribua a ela o valor "Lua".
```js
   let nome = "Lua";
```

3) Crie uma variável chamada idade e atribua a ela o valor 25.
```js
   let idade = 25;
```

4) Defina uma variável numeroDeVendas e atribua a ela o valor 50.
```js
   let numeroDeVendas = 50;
```

5) Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
```js
   let saldoDisponivel = 1000;
```

6) Exiba um alerta com o texto "Erro! Preencha todos os campos"
```js
   alert("Erro! Preencha todos os campos")
```

7) Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
```js
   let mensagemDeErro = "Erro! Preencha todos os campos"
   alert(mensagemDeErro)
```

8) Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
```js
   let nomeUsuario = prompt("Digite seu nome:")
```

9) Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
```js
   let idadeUsuario = prompt("Digite sua idade:")
```

10) Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
```js
    if(parseInt(idadeUsuario) >= 18){
        alert("Pode tirar a habilitação!")
    }
```

11) Misture as 3 últimas questões em uma só.
```js
    let name = prompt("Qual é o seu nome?");
    let age = prompt("Qual é a sua idade?");

    if (age >= 18) {
         alert(`Olá, ${name}! Você é maior de idade.`);
    } else {    
        alert(`Olá, ${name}! Você é menor de idade.`);
    }
```

12) Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
```js
   let contador = 1;
   
   while(contador <= 10){
         console.log(contador);
         contador++;
      }
```

13) Faça um loop que conte de 10 a 0 e mostre os números.
```js
   let contador = 10;

   while(contador >= 0){
         console.log(contador);
         contador--;
      }
```

14) Faça um loop que conte de 0 a 20, mas pule de 2 em 2 números.
```js
   let contador = 0;

   while(contador <= 20){
         console.log(contador);
         contador += 2;
      }
```

15) Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.

```js
   let numero = prompt("Digite um número:");

   while(numero >= 0){
         console.log(numero);
         numero--;
      }
```
16) Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.

```js
   let numero = prompt("Digite um número:");
   let contador = 0;

   while(contador <= numero){
         console.log(contador);
         contador++;
      }
```         
17) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
```js
   let nome = Karolina Disigant
   alert(`Olá, ${nome}`)
```

18) Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
```js
   let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?")
   console.log(`A linguagem de programação que você mais gosta é ${linguagemFavorita})
```
19) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
```js
   let valor1 = 7;
   let valor2 = 8;

   let resultado = valor1 + valor2;

   console.log(`A soma de ${valor1} com ${valor2} é igual a ${resultado}`);
```
20) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
```js
   let valor1 = 9;
   let valor2 = 8;

   let resultado = valor1 + valor2;

   console.log(`A diferença entre ${valor1} com ${valor2} é igual a ${resultado}`);
```
21) Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
```js
      let numero = prompt("Escolha um número para ser verificado: ");

      if (numero > 0) {
         alert("O número é positivo.");
      } else if (numero < 0) {
         alert("O número é negativo.");
      } else {
         alert("O número é 0.");
      }
```

22) Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
```js
   //alteração para a nota ser inserida pelo usuário
   let nota = prompt("Qual foi a sua última nota?");

   if (nota > 7) {
      console.log("Aprovado");
   } else {
      console.log("Reprovado");
   }
```

23) Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
```js
   let numeroAleatorio = Math.random();  
   console.log(numeroAleatorio);
```

24) Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
```js
   let numeroInteiro = Math.floor(Math.random() * 10) + 1;
   console.log(numeroInteiro);
```

25) Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
```js
   let numeroInteiro = Math.floor(Math.random() * 1000) + 1;
   console.log(numeroInteiro);
```