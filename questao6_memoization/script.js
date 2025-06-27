function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para n < 0");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) return cache[chave];
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const fatorialMemo = memoize(fatorial);

function calcularMemo() {
  const n = parseInt(document.getElementById("numeroMemo").value);
  const resultadoDiv = document.getElementById("resultadoMemo");

  try {
    const resultado = fatorialMemo(n);
    resultadoDiv.innerText = `✅ Fatorial memoizado de ${n} é ${resultado}`;
  } catch (e) {
    resultadoDiv.innerText = `❌ Erro: ${e.message}`;
  }
}
