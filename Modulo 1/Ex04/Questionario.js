alert("QUESTIONÁRIO DE TURISTAS!");
let cidades = [];
let contagem = 0;
const nome = prompt("Insira seu nome: ");
let pergunta = prompt("Voce ja visitou alguma cidade?(S/N)");

while (pergunta === "S") {
  cidade = prompt("Insira o nome da cidade:");
  cidades += cidade + " ";
  contagem++;
  pergunta = prompt("Já visitou alguma outra cidade?(S/N)");
}
alert(
  "DADOS DO TURISTA!\nNome: " +
    nome +
    "\nTotal de cidades visitadas: " +
    contagem +
    "\nNome das cidades: " +
    cidades
);
