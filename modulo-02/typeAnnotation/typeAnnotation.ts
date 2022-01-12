// STRING
let nome: string = 'Luis';
let nomeEmpresa: string = 'Lacoste';
console.log(`Detalhes: ${nome} trabalha na empresa ${nomeEmpresa}`);


// ARRAYS
let animais: string[] = ["elefante", "cachorro", "gato", "girafa"];
console.log(animais);


// OBJETO
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: "New Civic", ano: 2022, preco: 100000 };
console.log(carro);


// FUNCTION
function multiplicarNumero(num1: number, num2: number) {
  return console.log(num1 * num2);
};
multiplicarNumero(2, 5);


// BOOLEAN
// Boolean = Objeto
// boolean = tipo primitivo
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;
 
if(tarefaConcluida) {
  console.log('Tarefa Concluída');
} else { 
  console.log('Tarefa Pendente');
};


// NUMBER & BIGINT
let num: number = 14.0;
console.log(num);
// ex:
let num1: number = 23.0;
let num2: number= 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;
console.log('Number - Ponto Flutuante...: ', num1);
console.log('Number - Hexadecimal...: ', num2);
console.log('Number - Octal...: ', num3);
console.log('Number - Binário...: ', num4);


// ex.BIGINT
let big1: bigint = 9007199254740991n;
let big2: bigint = 9007199254740995n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);








