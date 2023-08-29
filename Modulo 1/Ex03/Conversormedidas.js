alert("CONVERSOR DE MEDIDAS!");

let metro = prompt("Insira um valor em metros(m): ");

const unidade = prompt(
  "Escolha uma das opções para ocorrer a conversão:\n1.Milímetros(mm)\n2.Centímetro(cm)" +
    "\n3.Decímetro(dm)\n4.Decametro(dam)\n5.Hectometro(hm)\n6.Quilometro(km)"
);
const medida = parseFloat(unidade);
switch (medida) {
  case 1:
    alert(metro + "m é igual a " + metro * 0.001 + "mm");
    break;
  case 2:
    alert(metro + "m é igual a " + metro * 0.01 + "cm");
    break;
  case 3:
    alert(metro + "m é igual a " + metro * 0.1 + "dm");
    break;
  case 4:
    alert(metro + "m é igual a " + metro * 10 + "dam");
    break;
  case 5:
    alert(metro + "m é igual a " + metro * 100 + "hm");
    break;
  case 6:
    alert(metro + "m é igual a " + metro * 1000 + "Km");
    break;
  default:
    alert("OPÇÃO INVÁLIDA!");
    break;
}
