alert(
  "Insira os valores de x e y e suas operações serão calculadas nessa mesma ordem!"
);
const entrada1 = prompt("Insira o valor de x: ");
const entrada2 = prompt("Insira o valor de y: ");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const sub = x - y;
const mult = x * y;
const div = x / y;

alert(
  "RESULTADOS!\nSoma: " +
    soma +
    "\nSubtração: " +
    sub +
    "\nMultiplicação: " +
    mult +
    "\nDivisão: " +
    div
);
