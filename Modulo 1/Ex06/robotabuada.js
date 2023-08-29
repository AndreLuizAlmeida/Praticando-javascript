alert("ROBO DA TABUADA!");
const valor = prompt(
  "Insira um número de 1 a 20 para ser calculada a tabuada: "
);
let resultado = "";
for (let i = 0; i < 11; i++) {
  resultado += " -> " + valor + " x " + i + " = " + valor * i + "\n";
}
alert(resultado);
