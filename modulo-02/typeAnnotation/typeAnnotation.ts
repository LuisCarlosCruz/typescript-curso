// STRING
let nome: string = 'Luis';
let nomeEmpresa: string = 'Lacoste';
console.log(`Detalhes: ${nome} trabalha na empresa ${nomeEmpresa}`);


// ARRAYS
// array de strings
let animais: Array<string> = ["elefante", "cachorro", "gato", "girafa"];
console.log(animais);

// outra sintaxe
let animais2: string[] = ["leao", "jacare", "sabia", "esquilo"];
console.log(animais2);

// ARRAY OBJECT
let estados: Array<object> = [{ nomeEstado: 'São Paulo', sigla: 'DF', }];
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


// TUPLE (tupla)
// É uma lista de valores fixos de elementos (A ORDEM É IMPORTANTE)
  // ex1: (lista homogênea)
  let pessoa: [string, string, number];
  pessoa = ['luis', 'carlos', 5];  //  (A ORDEM É IMPORTANTE)

  // ex2: (com labels)
  let pessoa2: [nome: string, posicao: string, idade: number] = ['luis', 'dev', 27];
  console.log(pessoa2);
  console.log(pessoa2[1]); // dev

  // ex3. (Spread Operator)
  let listaFrutas: [string, ...Array<string>] = ['maca', 'banana', 'laranja', 'manga'];
  console.log(...listaFrutas);

  // ex4. (lista heterogênea)
  let listaFrutas2: [number, boolean, ...Array<string>] = [5, true, ...listaFrutas];
  console.log(listaFrutas2);

  // ex4. (em funções)
  // 1° e 2º param são do tipo arrays e retorno um spread dos dois param
  function listarPessoas(nome: Array<string>, idades: Array<number>) {
    return [...nome, ...idades];
  };
  let resultadoFuncaoListarPessoas = listarPessoas(['luis', 'carlos'], [27, 72]);
  console.log(resultadoFuncaoListarPessoas);

  // ex5. (Labeled Tuples com Spread Operator numa função)
  // type eu crio e defino o tipo
  type Nome = [primeiroNome: string, segundoNome: string] // 
              | // \ é um OU
              [primeiroNome: string, segundoNome: string, terceiroNome: string];

  function imprimeNomeCompleto(...nome: Nome) {
    return [...nome];
  };
  console.log(imprimeNomeCompleto('luis', 'carlos', 'cruz'));


  // ENUM
  // é mais recomendado o uso de array ou obj
  // ex.1
  // evitar usar enum string
  const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
  }
  
  function comida(c: Comida) {
    return 'Comidas muito apetitosas!';
  }
  
  console.log(comida(Comida.Pizza));
  console.log(comida(Comida.Churrasco));
  // console.log(comida(5));  // error 

  // ex.2 : Quando usar enum?!
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!');
}


// ANY
// Pouco usado
// Algo indefinido
// É o default do typescript
// ex.1
const valorA: any = 888;
const valorB: any = 'cachorro';

const result = valorA + valorB;
console.log(result); // 888cachorro


// UNKNOWN
// Não sabe qual tipo definir (valor desconhecido)
// ex.1
// (aceita qualquer tipo)
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';
console.log(valorVariavel); // 'Oi! Tudo bem?'

// ex.2 Erro ao atribuir um valor do tipo 'unknown' a outros tipos!
// let valor: unknown;
// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor4: string = valor;


// VOID
// Ausência de dados
// NAO retorna nada
const log = (msg: string): void => {
  console.log(msg);
}

// NULL
// Representa o nulo,vazio ou ZERO
// Valor vazio ou inexistente
let variavel = null; // 


// UNDEFINED
// Indica ausência
// É convertido em NAN (Not a Number)
let undef; // undefined


// NEVER
// NAO muito utilizado
// utilizado geralmente em erros
// nao pode receber valores
function error(msg: string): never {
  throw new Error(msg);
}
