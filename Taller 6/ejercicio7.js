const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPar(n) {
  return n % 2 === 0;
}

function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function analizar(n) {
  console.log(`Número: ${n}`);
  console.log(`${esPar(n) ? 'Par' : 'Impar'}`);
  console.log(`${esPrimo(n) ? 'Sí es primo' : 'No es primo'}`);
}

rl.question('Ingresa un número: ', (valor) => {
  const numero = parseInt(valor);
  analizar(numero);
  rl.close();
});

module.exports = { analizar };