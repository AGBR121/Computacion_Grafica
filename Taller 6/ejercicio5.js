const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarDigito(numero, digito) {
  let contador = 0;

    if (numero === 0) {
      if (digito === 0) contador = 1;
    }

    while (numero > 0) {
      const ultimoDigito = numero % 10;      
      if (ultimoDigito === digito) contador++; 
      numero = Math.floor(numero / 10);       
    }

    console.log(`El dígito ${digito} aparece ${contador} vez/veces en el número`);
}

rl.question('Ingresa un número: ', (valorNumero) => {
  rl.question('Ingresa el dígito a buscar: ', (valorDigito) => {

    let numero = Math.abs(parseInt(valorNumero)); 
    const digito = parseInt(valorDigito);
    contarDigito(numero, digito);
    rl.close();
  });
});

module.exports = { contarDigito };