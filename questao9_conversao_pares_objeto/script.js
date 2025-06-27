function paresParaObjeto() {
  const input = document.getElementById("inputPares").value;
  const resultadoDiv = document.getElementById("resultadoPares");

  try {
    const pares = JSON.parse(input);
    if (!Array.isArray(pares)) throw new Error("A entrada deve ser um array de pares.");

    const obj = {};
    pares.forEach(par => {
      if (Array.isArray(par) && par.length === 2) {
        obj[par[0]] = par[1];
      } else {
        throw new Error("Cada item deve ser um par [chave, valor].");
      }
    });

    resultadoDiv.innerText = JSON.stringify(obj, null, 2);
  } catch (e) {
    resultadoDiv.innerText = "❌ Erro: " + e.message;
  }
}

function objetoParaPares() {
  const input = document.getElementById("inputObjeto").value;
  const resultadoDiv = document.getElementById("resultadoObjeto");

  try {
    const obj = JSON.parse(input);
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      throw new Error("A entrada deve ser um objeto válido.");
    }

    const pares = Object.entries(obj);
    resultadoDiv.innerText = JSON.stringify(pares, null, 2);
  } catch (e) {
    resultadoDiv.innerText = "❌ Erro: " + e.message;
  }
}
