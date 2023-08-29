// let fila = [];
// let opçao = "";
// do {
//   let pacientes = "";
//   for (i = 0; i < fila.length; i++) {
//     pacientes += i + 1 + "° - " + fila[i] + "\n";
//   }
//   opçao = prompt(
//     "Pacientes:\n" +
//       pacientes +
//       "\n" +
//       "Escolha uma ação\n1.Novo paciente\n2.Consultar paciente\n3.Sair"
//   );
//   switch (opçao) {
//     case "1":
//       const Novopaciente = prompt("Insira o nome do novo paciente: ");
//       fila.push(Novopaciente);
//       break;
//     case "2":
//       const consultar = fila.shift();
//       alert(consultar + " foi consultado!");
//       break;
//     case "3":
//       alert("Encerrando...");
//       break;
//     default:
//       alert("Opção inválida!");
//       break;
//   }
// } while (opçao != "3");

let fila = [];
let opçao = "";
do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n";
  }
  opçao = prompt(
    "PACIENTES:\n" +
      pacientes +
      "\n" +
      "1-Novo paciente\n2-Consultar paciente\n3-Sair"
  );
  switch (opçao) {
    case "1":
      const Novopaciente = prompt("Insira o nome do novo paciente: ");
      fila.push(Novopaciente);
      break;
    case "2":
      const consultar = fila.shift();
      alert("Paciente " + consultar + " foi consultado");
      break;
    case "3":
      alert("Encerrando programa...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opçao != "3");
