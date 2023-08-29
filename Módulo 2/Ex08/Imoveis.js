const imoveis = [];
let opçao = "";

do {
  opçao = prompt(
    "CADASTRO DE IMOVEIS\nTotal de imoveis cadastrados: " +
      imoveis.length +
      "\n1 - Cadastrar um novo imovel\n2 - Exibir todos os imoveis cadastrados\n3 - Sair"
  );
  switch (opçao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Insira o nome do proprietário do imóvel: ");
      imovel.quartos = prompt("Insira a quantidade de quartos do imóvel: ");
      imovel.banheiros = prompt("Insira a quantidade de banheiros do imóvel: ");
      imovel.garagem = prompt("O imovel possui garagem?(Sim/Não): ");

      const confirmar = confirm(
        "Salvar este imovel?\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );
      if (confirmar) {
        alert("Imóvel salvo com sucesso!");
        imoveis.push(imovel);
      } else {
        alert("Imovel cancelado!");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imovel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nGaragem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando programa...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opçao != "3");
