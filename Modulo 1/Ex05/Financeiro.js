alert("BEM VINDO AO SEU CONTROLE DE FINANÇAS!");
let adicionar = 0;
let remover = 0;
let dinheiro = parseFloat(prompt("Insira a quantidade de dinheiro: "));
let opçoes = prompt(
  "POUPANÇA\nDinheiro: " +
    dinheiro +
    "\n1.Adicionar dinheiro\n2.Retirar dinheiro\n3.Encerrar programa"
);
do {
  switch (opçoes) {
    case "1":
      adicionar = parseFloat(prompt("Insira a quantidade a ser adicionada: "));
      dinheiro += adicionar;
      break;
    case "2":
      remover = prompt("Insira a quantidade a ser retirada: ");
      dinheiro -= remover;
      break;
    case "3":
      alert("Saindo do programa");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
  opçoes = prompt(
    "POUPANÇA\nDinheiro: " +
      dinheiro +
      "\n1.Adicionar dinheiro\n2.Retirar dinheiro\n3.Encerrar programa"
  );
} while (opçoes != "3");
alert("Programa encerrado!");
