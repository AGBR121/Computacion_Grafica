const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPalindromo(numero) {
  let numeroOriginal = numero;
  let invertido = 0;

  while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }

  if(invertido === numeroOriginal) {
    console.log(`${numeroOriginal} es un palindromo.`);
  }else{
    console.log(`${numeroOriginal} no es un palindromo.`);
  }
}

rl.question('Ingresa un número: ', (valor) => {
  let numero = parseInt(valor);
  esPalindromo(numero);
  rl.close();

});

module.exports = { esPalindromo };