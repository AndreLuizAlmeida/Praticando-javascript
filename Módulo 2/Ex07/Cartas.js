let baralho = [];
let opçao = "";

do {
  opçao = prompt(
    "Baralho contém " +
      baralho.length +
      " cartas" +
      "\n1.Adicionar carta\n2.Retirar carta\n3.Sair"
  );
  switch (opçao) {
    case "1":
      const Novacarta = prompt("Insira o nome da carta a ser adicionada: ");
      baralho.unshift(Novacarta);
      break;
    case "2":
      const removercarta = baralho.shift();
      alert("Carta " + removercarta + " foi retirada");
      break;
    case "3":
      alert("Encerrando programa...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opçao != "3");
