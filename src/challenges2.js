// Desafio 11 - colocar um array de exatos 11 numeros (ou retornar erro), que não podem se repetir mais que duas vezes (ou retornar erro), serem maiores que 9(ou retornar erro) ou menores que 0(ou retornar erro). Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função generatePhoneNumber deverá retornar (12) 34567-8901.
function generatePhoneNumber(arrayDeNumeros) {
  if (arrayDeNumeros.length !== 11) {
    const fraseDeErro1 = 'Array com tamanho incorreto.'
  }
  let contagem = 0;
  for (const chave in arrayDeNumeros) {
    let numero = arrayDeNumeros[chave]
    contagem += 1
    if (arrayDeNumeros[chave] < 0 || arrayDeNumeros[chave] > 9) {
      let fraseDeErro = 'não é possível gerar um número de telefone com esses valores'
    }
}
}
console.log(generatePhoneNumber([1, 2]));

// Desafio 12 - A função triangleCheck deverá receber os parâmetros lineA, lineB e lineC com o valor do comprimento de três linhas distintas. - O retorno da sua função deverá ser um booleano.
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
