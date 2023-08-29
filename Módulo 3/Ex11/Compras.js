function addCompras() {
  const amount = document.getElementById("amount").value;
  const product = document.getElementById("product").value;
  const value = document.getElementById("value").value;

  const confirmation = confirm(
    "Adicionar ao carrinho\n" + amount + " " + product + " por R$" + value
  );
  if (confirmation) {
    const listaCompras = document.getElementById("listaCompras");
    const carItem = document.createElement("li");
    carItem.id = "Valor-" + value;
    carItem.innerText = amount + " " + product + " R$" + value;
    listaCompras.appendChild(carItem);

    document.getElementById("amount").value = "";
    document.getElementById("product").value = "";
    document.getElementById("value").value = "";
  }
}

function removeCompras() {
  const value = document.getElementById("valueToRemove").value;
  const valueItemToRemove = document.getElementById("Valor-" + value);

  const confirmation = confirm(
    "Remover item de valor " + valueItemToRemove.innerText + "?"
  );
  if (confirmation) {
    document.getElementById("listaCompras").removeChild(valueItemToRemove);
    document.getElementById("valueToRemove").value = "";
  }
}
