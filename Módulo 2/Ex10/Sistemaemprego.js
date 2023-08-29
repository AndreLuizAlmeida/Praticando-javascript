const vagas = [];

function ListarVagas() {
  const VagasListadas = vagas.reduce(function (textofinal, vaga, indice) {
    textofinal += indice + ". ";
    textofinal += vaga.nome;
    textofinal += vaga.candidatos.length + " candidatos";
    return textofinal;
  }, "");
  alert(VagasListadas);
}
function CriarNovaVaga() {
  const Nome = prompt("Insira o nome da vaga: ");
  const Descriçao = prompt("Insira uma descriçao para a vaga: ");
  const DataLimite = prompt(
    "Insira a data limite em que essa vaga ficará disponivel(dd/mm/aa): "
  );
  const Confirmar = confirm("Clique em OK para confirmar o cadastro da vaga!");
  if (Confirmar) {
    const NovaVaga = { Nome, Descriçao, DataLimite, candidatos: [] };
    vagas.push(NovaVaga);
    alert("Nova vaga criada com sucesso!");
  } else {
    alert("Não foi criada a vaga");
  }
}
function ExibirVaga() {
  const Indice = prompt("Indique o indice da vaga que deseja ver: ");
  const vaga = vagas[Indice];
  const CandidatosEmTexto = vaga.candidatos.reduce(function (
    textofinal,
    candidato
  ) {
    return textofinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga n° " +
      Indice +
      "\nNome: " +
      vaga.Nome +
      "\nDescrição: " +
      vaga.Descricao +
      "\nData limite: " +
      vaga.DataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      CandidatosEmTexto
  );
}
function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const Indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[Indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      Indice +
      "?\n" +
      "Nome: " +
      vaga.Nome +
      "\nDescrição: " +
      vaga.Descricao +
      "\nData limite: " +
      vaga.DataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}
function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}
function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opcao;
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        ListarVagas();
        break;
      case "2":
        CriarNovaVaga();
        break;
      case "3":
        ExibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
