// Desafio 1   npm teste para todos e npm test compareTrue para apenas a função
function compareTrue(booleano1, booleano2) {
  return (booleano1 && booleano2) ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  return `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  for (const numero in arrayNumeros) {
    if (arrayNumeros[numero] > maiorNumero) {
      maiorNumero = arrayNumeros[numero];
    }
  }
  let contagem = 0;
  for (const contador in arrayNumeros) {
    if (arrayNumeros[contador] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
}

// // Desafio 7
function catAndMouse(mouse, cat1, cat2) {
//   if (cat1 mais proximo) {
//     return `cat1`;
//   } else if (cat2 mais proximo) {
//     return `cat2`;
//   } else {
//     return `os gatos trombam e o rato foge`;
//   }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  const arrayDeStrings = []
  for (const numero in arrayNumeros) {
    if (arrayNumeros[numero] % 3 == 0 && arrayNumeros[numero] % 5 == 0) {
      arrayDeStrings.push('fizzBuzz')
    } else if (arrayNumeros[numero] % 3 == 0 && arrayNumeros[numero] % 5 != 0) {
      arrayDeStrings.push('fizz')
    } else if (arrayNumeros[numero] % 3 != 0 && arrayNumeros[numero] % 5 != 0) {
      arrayDeStrings.push('bug!')
    } else if (arrayNumeros[numero] % 3 != 0 && arrayNumeros[numero] % 5 == 0) {
      arrayDeStrings.push('buzz')
    }
  }
  return arrayDeStrings
}  

// Desafio 9
function encode(string) {
  // seu código aqui
}
function decode(stringMista) {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
