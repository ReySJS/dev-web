let number1; //Variável para gravarmos o valor do operando
let number2; //Variável para gravarmos o valor do operador
let sum; //Variável para gravarmos o valor da soma
let sub; //Variável para gravarmos o valor da subtração
let multiply; //Variável para gravarmos o valor da multiplicação
let division; //Variável para gravarmos o valor da divisão
let rest; //Variável para gravarmos o valor do resto da divisão
let power; //Variável para gravarmos o valor da potenciação

//Declaração da função que realiza o cálculo
function calculate() {
  // Captura dos valores e atribuição às suas respectivas variáveis

  // Com document.getElementById é possível capturar um elemento no HTML e por consequência
  // todos os seus atributos incluindo o valor presente nele no caso do input

  // Usamos o método Number() para informar que o valor obtido deve ser convertido para o tipo numérico
  number1 = Number(document.getElementById("input-number1").value);
  number2 = Number(document.getElementById("input-number2").value);

  // realização das operações
  sum = number1 + number2;
  sub = number1 - number2;
  multiply = number1 * number2;
  division = number1 / number2;
  rest = number1 % number2;
  power = number1 ** number2;

  // Escrita dos resultados no html
  document.getElementById("result-sum").innerHTML = sum;
  document.getElementById("result-sub").innerHTML = sub;
  document.getElementById("result-multiply").innerHTML = multiply;
  document.getElementById("result-division").innerHTML = division;
  document.getElementById("result-rest").innerHTML = rest;
  document.getElementById("result-power").innerHTML = power;
}
