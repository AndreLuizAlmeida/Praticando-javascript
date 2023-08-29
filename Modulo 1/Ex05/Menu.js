alert("Bem vindo ao menu interativo!");
let opçao = prompt(
  "Escolha uma das opçöes abaixo: \n1.Mensagem motivacional\n2.Mensagem filosófica" +
    "\n3.Conselho\n4.???\n5.Encerrar programa"
);
do {
  switch (opçao) {
    case "1":
      alert("Você consegue! Acredite em si mesmo!");
      break;
    case "2":
      alert(
        "Não importa o quão devagar você vá, desde que não pare.\nConfúcio"
      );
      break;
    case "3":
      alert("Começe com pouco, termine com muito");
      break;
    case "4":
      alert("Tenha gatos! *joinha*");
      break;
    case "5":
      alert("Encerrando programa");
      break;
    default:
      alert("Opção invalida!");
      break;
  }
  opçao = prompt(
    "Escolha uma das opçöes abaixo para continuar ou encerrar: \n1.Mensagem motivacional\n2.Mensagem filosófica" +
      "\n3.Conselho\n4.???\n5.Encerrar programa"
  );
} while (opçao != "5");
alert("Programa encerrado!");
