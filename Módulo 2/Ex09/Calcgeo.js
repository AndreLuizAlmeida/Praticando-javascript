function AreaQuadrado(lado) {
  return lado * lado;
}
function AreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
function AreaTrapezio(Bmaior, Bmenor, altura) {
  return ((Bmaior + Bmenor) * altura) / 2;
}
function AreaRetangulo(base, altura) {
  return base * altura;
}
function AreaCirculo(raio) {
  return 3.14 * raio ** 2;
}
let opçao = "";
do {
  opçao = prompt(
    "CALCULADORA GEOMETRICA!\n1-Área do Quadrado\n2-Área do Triangulo\n3-Área do Trapézio" +
      "\n4-Área do Retangulo\n5-Área do Círculo\n6-Sair"
  );
  switch (opçao) {
    case "1":
      const LadoQuadrado = prompt("Insira o valor do lado do quadrado: ");
      alert(
        "A área do quadrado com lado " +
          LadoQuadrado +
          " é " +
          AreaQuadrado(LadoQuadrado)
      );
      break;
    case "2":
      const BaseTriangulo = prompt("Insira o tamanho da base do triangulo: ");
      const AlturaTriangulo = prompt(
        "Insira o tamanho da altura do triangulo: "
      );
      alert(
        "A área do triangulo é " + AreaTriangulo(BaseTriangulo, AlturaTriangulo)
      );
      break;
    case "3":
      const BaseMaior = parseFloat(
        prompt("Insira o tamanho da base maior do trapezio: ")
      );
      const BaseMenor = parseFloat(
        prompt("Insira o tamanho da base menor do trapezio: ")
      );
      const AlturaTrapezio = prompt("Insira o tamanho da altura do trapezio: ");
      alert(
        "A área do trapezio é " +
          AreaTrapezio(BaseMaior, BaseMenor, AlturaTrapezio)
      );
      break;
    case "4":
      const BaseRetangulo = prompt("Insira o tamanho da base do retangulo: ");
      const AlturaRetangulo = prompt(
        "Insira o tamanho da altura do retangulo: "
      );
      alert(
        "A área do retangulo é " + AreaRetangulo(BaseRetangulo, AlturaRetangulo)
      );
      break;
    case "5":
      const Raio = prompt("Insira o tamanho do raio do circulo: ");
      alert("A área do circulo é " + AreaCirculo(Raio));
      break;
    case "6":
      alert("Encerrando programa...");
      break;

    default:
      break;
  }
} while (opçao != "6");
// OUTRA FORMA
// function calcularAreaTriangulo() {
//   const base = parseFloat(prompt("Informe a base do triângulo:"));
//   const altura = parseFloat(prompt("Informe a altura do triângulo:"));
//   return (base * altura) / 2;
// }
// function calcularAreaRetangulo() {
//   const base = parseFloat(prompt("Informe a base do retângulo:"));
//   const altura = parseFloat(prompt("Informe a altura do retângulo:"));
//   return base * altura;
// }
// function calcularAreaQuadrado() {
//   const lado = parseFloat(prompt("Informe a área do quadrado:"));
//   return lado * lado;
// }
// function calcularAreaTrapezio() {
//   const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
//   const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
//   const altura = parseFloat(prompt("Informe a altura do trapézio:"));
//   return ((baseMaior + baseMenor) * altura) / 2;
// }
// function calcularAreaCirculo() {
//   const raio = parseFloat(prompt("Informe o raio do círculo:"));
//   return 3.14 * raio * raio;
// }
// function exibirMenu() {
//   return prompt(
//     "Calculadora Geométrica\n" +
//       "1. Calcular área de triângulo\n" +
//       "2. Calcular área de retângulo\n" +
//       "3. Calcular área de quadrado\n" +
//       "4. Calcular área de trapézio\n" +
//       "5. Calcular área de círculo\n" +
//       "6. Sair\n"
//   );
// }
// function executar() {
//   let opcao = "";

//   do {
//     opcao = exibirMenu();
//     let resultado;

//     switch (opcao) {
//       case "1":
//         resultado = calcularAreaTriangulo();
//         break;
//       case "2":
//         resultado = calcularAreaRetangulo();
//         break;
//       case "3":
//         resultado = calcularAreaQuadrado();
//         break;
//       case "4":
//         resultado = calcularAreaTrapezio();
//         break;
//       case "5":
//         resultado = calcularAreaCirculo();
//         break;
//       case "6":
//         alert("Saindo...");
//         break;
//       default:
//         alert("Opção inválida!");
//         break;
//     }

//     if (resultado) {
//       alert("Resultado: " + resultado);
//     }
//   } while (opcao !== "6");
// }
// executar();
