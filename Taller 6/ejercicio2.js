const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cuadradosOCubos(numero) {
    if(numero % 2 === 0) {
        for(let i = 1; i <= numero; i++) {
            console.log(i*i + " ");
        }
    } else {
        for(let i = 1; i <= numero; i++) {
            console.log(i*i*i + " ");
        }
    }
}

rl.question('Ingresa un número: ', (valor) => {
    const numero = parseInt(valor);
    cuadradosOCubos(numero);
    rl.close();
});

module.exports = { cuadradosOCubos };