// Desafio 11 - colocar um array de exatos 11 numeros (ou retornar erro), que não podem se repetir mais que duas vezes (ou retornar erro), serem maiores que 9(ou retornar erro) ou menores que 0(ou retornar erro). Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função generatePhoneNumber deverá retornar (12) 34567-8901.
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
  if (lineA >= (lineB + lineC) || lineB >= (lineA + lineC) || lineC >= (lineB + lineA) || lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false
  } else {
    return true
  }
}

// Desafio 13 -// String recebida:
  // '1 cachaça, 5 cervejas e 1 copo de vinho'
  // // String retornada:
  //   '7 copos de água' - O número na frente de cada bebida deve estar entre 1 e 9. - var result=text.replace(/[^0-9]/g, ''); 
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
