alert("CALCULO DE DANO!");

const nome_atacante = prompt("Insira o nome do atacante: ");
const poder_atacante = prompt(
  "Insira a quantidade de poder de ataque do mesmo: "
);
const nome_defensor = prompt("Insira do nome do defensor: ");
const poder_defesa = prompt(
  "Insira a quantidade de poder de defesa do mesmo: "
);
let vida = prompt("Insira a quantidade de vidas do defensor: ");
const escudo = confirm("Deseja ter um escudo?");

alert(
  "ATACANTE\nNome: " +
    nome_atacante +
    "\nPoder de ataque: " +
    poder_atacante +
    "\nDEFENSOR\nNome: " +
    nome_defensor +
    "\nPoder de defesa: " +
    poder_defesa +
    "\nPossuia escudo: " +
    escudo +
    "\nVida: " +
    vida
);

if (poder_atacante > poder_defesa && escudo == false) {
  vida = vida - (poder_atacante - poder_defesa);
} else if (poder_atacante > poder_defesa && escudo == true) {
  vida -= (poder_atacante - poder_defesa) / 2;
} else if (poder_atacante <= poder_defesa) {
  vida = vida;
}

alert("ATACANDO.");
alert("ATACANDO..");
alert("ATACANDO...");
alert(
  "ATACANTE\nNome: " +
    nome_atacante +
    "\nPoder de ataque: " +
    poder_atacante +
    "\nDEFENSOR\nNome: " +
    nome_defensor +
    "\nPoder de defesa: " +
    poder_defesa +
    "\nPossuia escudo: " +
    escudo +
    "\nVida: " +
    vida
);
