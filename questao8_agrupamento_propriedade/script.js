function agruparVendas() {
  const input = document.getElementById("inputVendas").value;
  const resultadoDiv = document.getElementById("resultadoVendas");

  try {
    const vendas = JSON.parse(input);
    if (!Array.isArray(vendas)) throw new Error("A entrada deve ser um array.");

    const agrupado = vendas.reduce((acc, venda) => {
      acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
      return acc;
    }, {});

    resultadoDiv.innerText = JSON.stringify(agrupado, null, 2);
  } catch (e) {
    resultadoDiv.innerText = "❌ Erro: " + e.message;
  }
}
