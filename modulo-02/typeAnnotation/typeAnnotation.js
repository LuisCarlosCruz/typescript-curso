"use strict";
// STRING
let nome = 'Luis';
let nomeEmpresa = 'Lacoste';
console.log(`Detalhes: ${nome} trabalha na empresa ${nomeEmpresa}`);
// ARRAYS
// array de strings
let animais = ["elefante", "cachorro", "gato", "girafa"];
console.log(animais);
// outra sintaxe
let animais2 = ["leao", "jacare", "sabia", "esquilo"];
console.log(animais2);
// ARRAY OBJECT
let estados = [{ nomeEstado: 'São Paulo', sigla: 'DF', }];
console.log(animais);
// OBJETO
let carro;
carro = { nome: "New Civic", ano: 2022, preco: 100000 };
console.log(carro);
// FUNCTION
function multiplicarNumero(num1, num2) {
    return console.log(num1 * num2);
}
;
multiplicarNumero(2, 5);
// BOOLEAN
// Boolean = Objeto
// boolean = tipo primitivo
let tarefaConcluida = true;
let tarefaPendente = false;
if (tarefaConcluida) {
    console.log('Tarefa Concluída');
}
else {
    console.log('Tarefa Pendente');
}
;
// NUMBER & BIGINT
let num = 14.0;
console.log(num);
// ex:
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log('Number - Ponto Flutuante...: ', num1);
console.log('Number - Hexadecimal...: ', num2);
console.log('Number - Octal...: ', num3);
console.log('Number - Binário...: ', num4);
// ex.BIGINT
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
// TUPLE (tupla)
// É uma lista de valores fixos de elementos (A ORDEM É IMPORTANTE)
// ex1: (lista homogênea)
let pessoa;
pessoa = ['luis', 'carlos', 5]; //  (A ORDEM É IMPORTANTE)
// ex2: (com labels)
let pessoa2 = ['luis', 'dev', 27];
console.log(pessoa2);
console.log(pessoa2[1]); // dev
// ex3. (Spread Operator)
let listaFrutas = ['maca', 'banana', 'laranja', 'manga'];
console.log(...listaFrutas);
// ex4. (lista heterogênea)
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ex4. (em funções)
// 1° e 2º param são do tipo arrays e retorno um spread dos dois param
function listarPessoas(nome, idades) {
    return [...nome, ...idades];
}
;
let resultadoFuncaoListarPessoas = listarPessoas(['luis', 'carlos'], [27, 72]);
console.log(resultadoFuncaoListarPessoas);
function imprimeNomeCompleto(...nome) {
    return [...nome];
}
;
console.log(imprimeNomeCompleto('luis', 'carlos', 'cruz'));
