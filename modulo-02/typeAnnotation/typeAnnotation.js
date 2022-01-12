"use strict";
// VARIÁVEIS
let nome = "typeScript";
console.log(nome);
// ARRAYS
let animais = ["elefante", "cachorro", "gato", "girafa"];
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
