const readline = require('readline');

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}


function mostrarMenu() {
  console.log('\n  +------------------------------------------+');
  console.log('  |             MENÚ DE EJERCICIOS           |');
  console.log('  +----+-------------------------------------+');
  console.log('  | 1  | Número perfecto                     |');
  console.log('  | 2  | Cuadrados o cubos según par/impar   |');
  console.log('  | 3  | Invertir dígitos                    |');
  console.log('  | 4  | Palíndromo                          |');
  console.log('  | 5  | Contar apariciones de un dígito     |');
  console.log('  | 6  | Decimal a binario                   |');
  console.log('  | 7  | Par, impar o primo                  |');
  console.log('  | 0  | Salir                               |');
  console.log('  +----+-------------------------------------+');
}

async function main() {
  let opcion = -1;

  while (opcion !== 0) {
    mostrarMenu();
    opcion = parseInt(await preguntar('\nElige una opción: '));

    switch (opcion) {

      case 1: {
        const n = parseInt(await preguntar('Ingresa un número: '));
        esPerfecto(n);
        break;
      }

      case 2: {
        const n = parseInt(await preguntar('Ingresa un número n: '));
        cuadradosOCubos(n);
        break;
      }

      case 3: {
        const n = parseInt(await preguntar('Ingresa un número entero: '));
        console.log(`\n  Número invertido: ${invertirDigitos(n)}`);
        break;
      }

      case 4: {
        const n = parseInt(await preguntar('Ingresa un número: '));
        esPalindromo(n);
        break;
      }

      case 5: {
        const n = parseInt(await preguntar('Ingresa un número: '));
        const d = parseInt(await preguntar('Ingresa el dígito a buscar: '));
        contarDigito(n, d);
        break;
      }

      case 6: {
        const n = parseInt(await preguntar('Ingresa un número decimal: '));
        decimalABinario(n);
        break;
      }

      case 7: {
        const n = parseInt(await preguntar('Ingresa un número: '));
        analizar(n);
        break;
      }

      case 0: {
        console.log('\n\n');
        break;
      }

      default: {
        console.log('\n  Opción no válida, intenta de nuevo.');
      }
    }
  }

  rl.close();
}

main();