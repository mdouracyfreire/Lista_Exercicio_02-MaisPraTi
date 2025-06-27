function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

function acao() {
  const valor = document.getElementById("entrada").value;
  const agora = new Date().toLocaleTimeString();
  document.getElementById("mensagem").innerText = `⌛ Ação executada às ${agora} com valor: "${valor}"`;
}

const acaoDebounce = debounce(acao, 1000);

function acionarDebounce() {
  acaoDebounce();
}
