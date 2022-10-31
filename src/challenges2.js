// Desafio 11
function generatePhoneNumber(arrayDeNumeros) {
  if (arrayDeNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (const chave in arrayDeNumeros) {
    if (arrayDeNumeros[chave] < 0 || arrayDeNumeros[chave] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < arrayDeNumeros.length; index2 += 1) {
      if (arrayDeNumeros[index] === arrayDeNumeros[index2]) {
        contador += 1;
      }
      if (contador === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${arrayDeNumeros[0]}${arrayDeNumeros[1]}) ${arrayDeNumeros[2]}${arrayDeNumeros[3]}${arrayDeNumeros[4]}${arrayDeNumeros[5]}${arrayDeNumeros[6]}-${arrayDeNumeros[7]}${arrayDeNumeros[8]}${arrayDeNumeros[9]}${arrayDeNumeros[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= (lineB + lineC) || lineB >= (lineA + lineC) || lineC >= (lineB + lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  const soNumeros = (string.replace(/[^0-9]/g, '')).split('');
  let soma = soNumeros.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
  return (soma === '1') ? `${soma} copo de água` : `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
