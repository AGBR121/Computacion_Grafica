const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPerfecto(numero) {
  let sumaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
    }
  }

  if (sumaDivisores === numero) {
    console.log(`${numero} Es un número perfecto`);
  } else {
    console.log(`${numero} No es un número perfecto`);
  }
}

rl.question('Ingresa un número: ', (valor) => {
  const numero = parseInt(valor);

  esPerfecto(numero);

  rl.close();
});

module.exports = { esPerfecto };