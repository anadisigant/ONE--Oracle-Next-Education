# Lógica de Programação: Explore Funções e Listas

## Interação

### Criando Funções

**O que é uma função?**
Uma função é um trecho de código responsável por executar uma ação específica. Ela ajuda a organizar e reutilizar o código de forma eficiente.

**Boas práticas de nomenclatura:**
- Use nomes descritivos que indiquem claramente o propósito da função.
- Utilize convenções de escrita como `camelCase` em JavaScript.

**Integração JavaScript -> HTML:**
Para usar funções JavaScript em uma página HTML, você precisa:
1. Declarar a função no arquivo JavaScript.
2. Chamar essa função dentro do HTML, geralmente através de eventos como `onclick`, `onchange`, etc.

**Acoplamento:**
Evite o acoplamento excessivo entre HTML e JavaScript, mantendo a separação entre estrutura (HTML), estilo (CSS) e comportamento (JavaScript).

**Chamando funções no HTML:**
Exemplo de chamada de função diretamente no HTML:
```html
<button onclick="saudacao()">Clique aqui</button>
```

### Tipos de Funções

| Tipo de Função              | Exemplo de Código                     | Uso                                                    |
|----------------------------|--------------------------------------|--------------------------------------------------------|
| Sem retorno e sem parâmetro | `function saudacao() { ... }`         | Execução de um bloco de código simples.                 |
| Sem retorno e com parâmetro | `function cumprimentar(nome) { ... }` | Execução de código com argumentos.                     |
| Com retorno e sem parâmetro | `function gerarNumeroAleatorio() { ... }` | Cálculo e retorno de um valor específico.              |
| Com retorno e com parâmetro | `function somar(a, b) { ... }`        | Cálculo e retorno baseado em argumentos.               |
| Função anônima              | `let saudacao = function() { ... };`  | Definição de função sem nome localmente.                |
| Arrow function             | `let quadrado = x => x * x;`          | Definição concisa de funções curtas.                    |
