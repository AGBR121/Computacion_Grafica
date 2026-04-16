const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function invertirDigitos(numero) {
  let invertido = 0;

  const esNegativo = numero < 0;
  if (esNegativo) numero = -numero;

  while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }

  if (esNegativo) invertido = -invertido;
  return invertido;
}

rl.question('Ingresa un número: ', (valor) => {
  let numero = parseInt(valor);
  invertirDigitos(numero);
  console.log(`Número invertido: ${invertirDigitos(numero)}`);
  rl.close();
});

module.exports = { invertirDigitos };