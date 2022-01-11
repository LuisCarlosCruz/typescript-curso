// VARIÁVEIS
let nome: string = "typeScript";
console.log(nome);

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

