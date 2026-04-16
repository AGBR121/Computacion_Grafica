const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function decimalABinario(numero) {
  let binario = 0;
  let posicion = 1; 

  if (numero === 0) {
    console.log('Binario: 0');
    rl.close();
    return;
  }

  while (numero > 0) {
    const residuo = numero % 2;      
    binario = binario + residuo * posicion; 
    posicion *= 10;                      
    numero = Math.floor(numero / 2);    
  }

  console.log(`Binario: ${binario}`);
}

rl.question('Ingresa un número decimal: ', (valor) => {
  let numero = parseInt(valor);
  decimalABinario(numero);
  rl.close();
});

module.exports = { decimalABinario };