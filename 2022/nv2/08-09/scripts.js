let operand; //Variável para gravarmos o valor do operando
let operator; //Variável para gravarmos o valor do operador
let sum; //Variável para gravarmos o valor da soma
let sub; //Variável para gravarmos o valor da subtração
let multiply; //Variável para gravarmos o valor da multiplicação
let division; //Variável para gravarmos o valor da divisão
let rest; //Variável para gravarmos o valor do resto da divisão
let power; //Variável para gravarmos o valor da potenciação

//Declaração da função que realiza o cálculo
function calculate(_operand, _operator) {
  console.log(_operand, _operator);
  // Captura dos valores e atribuição às suas respectivas variáveis

  // Com document.getElementById é possível capturar um elemento no HTML e por consequência
  // todos os seus atributos incluindo o valor presente nele no caso do input

  // Usamos o método Number() para informar que o valor obtido deve ser convertido para o tipo numérico
  operand = Number(_operand);
  operator = Number(_operator);

  // realização das operações
  sum = operand + operator;
  sub = operand - operator;
  multiply = operand * operator;
  division = operand / operator;
  rest = operand % operator;
  power = operand ** operator;

  // Escrita dos resultados no html
  document.getElementById("result-sum").innerHTML = sum;
  document.getElementById("result-sub").innerHTML = sub;
  document.getElementById("result-multiply").innerHTML = multiply;
  document.getElementById("result-division").innerHTML = division;
  document.getElementById("result-rest").innerHTML = rest;
  document.getElementById("result-power").innerHTML = power;
}
