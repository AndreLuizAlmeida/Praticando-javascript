alert("Bem vindo ao cadastramento!!");

const nome = prompt("Insira o primeiro nome do recruta: ");
const sobrenome = prompt("Insira o sobrenome do recruta: ");
const estudo = prompt("Insira o campo de estudo do recruta: ");
const idade = prompt("Insira a idade do recruta: ");
const sexo = prompt("Insira o sexo do recruta(M/F): ");

alert("Cadastramento concluido com sucesso!");
alert(
  "DADOS DO RECRUTA\nNome: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    estudo +
    "\nIdade: " +
    idade +
    "\nSexo: " +
    sexo
);
