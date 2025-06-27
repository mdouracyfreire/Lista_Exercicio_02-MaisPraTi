function ordenarProdutos() {
  const input = document.getElementById("inputProdutos").value;
  const resultadoDiv = document.getElementById("resultadoProdutos");

  try {
    const produtos = JSON.parse(input);

    if (!Array.isArray(produtos)) throw new Error("Entrada deve ser um array de produtos.");

    const nomesOrdenados = produtos
      .sort((a, b) => a.preco - b.preco)
      .map(produto => produto.nome);

    resultadoDiv.innerText = "📝 Nomes ordenados por preço: [" + nomesOrdenados.join(", ") + "]";
  } catch (e) {
    resultadoDiv.innerText = "❌ Erro: " + e.message;
  }
}
