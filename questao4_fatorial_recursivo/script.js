function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para n < 0");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

function calcularFatorial() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");

  try {
    const resultado = fatorial(numero);
    resultadoDiv.innerText = `✅ Fatorial de ${numero} é ${resultado}`;
  } catch (e) {
    resultadoDiv.innerText = `❌ Erro: ${e.message}`;
  }
}