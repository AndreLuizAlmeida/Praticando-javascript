alert("TESTE DE VELOCIDADE!");

const nome_veiculo1 = prompt("Insira o nome do veiculo 1: ");
const velocidade1 = prompt("Insira a velocidade desse veículo(Km/h): ");
const nome_veiculo2 = prompt("Insira o nome do veiculo 2: ");
const velocidade2 = prompt("Insira a velocidade desse veículo(Km/h): ");

if (velocidade1 > velocidade2) {
  alert(
    "O " +
      nome_veiculo1 +
      " com velocidade " +
      velocidade1 +
      "Km/h" +
      " é mais veloz que o " +
      nome_veiculo2 +
      " com velocidade " +
      velocidade2 +
      "Km/h"
  );
} else if (velocidade2 > velocidade1) {
  alert(
    "O " +
      nome_veiculo2 +
      " com velocidade " +
      velocidade2 +
      "Km/h" +
      " é mais veloz que o " +
      nome_veiculo1 +
      " com velocidade " +
      velocidade1 +
      "Km/h"
  );
} else {
  alert(
    "Os veículos " +
      nome_veiculo1 +
      " e " +
      nome_veiculo2 +
      " possuem a mesma velocidade de " +
      velocidade1 +
      "Km/h"
  );
}
