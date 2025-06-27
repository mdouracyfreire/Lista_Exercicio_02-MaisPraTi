function extrairUnicas() {
  const texto = document.getElementById("frase").value.trim();
  const palavras = texto.split(/\s+/);
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let duplicada = false;
    for (let j = 0; j < palavras.length; j++) {
      if (i !== j && palavras[i] === palavras[j]) {
        duplicada = true;
        break;
      }
    }
    if (!duplicada) {
      unicas.push(palavras[i]);
    }
  }

  document.getElementById("resultado").innerText = unicas.length > 0
    ? "Palavras únicas: [" + unicas.join(", ") + "]"
    : "Nenhuma palavra única encontrada.";
}