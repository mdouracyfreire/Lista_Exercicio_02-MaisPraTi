const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
  const input = document.getElementById("palpite");
  const valor = parseInt(input.value);
  const resultado = document.getElementById("resultado");
  const contador = document.getElementById("tentativas");

  if (isNaN(valor)) {
    resultado.innerText = "Digite um número válido.";
    return;
  }

  tentativas++;

  if (valor === numeroSecreto) {
    resultado.innerText = `🎉 Parabéns! Você acertou o número em ${tentativas} tentativa(s)!`;
  } else if (valor < numeroSecreto) {
    resultado.innerText = "🔼 Mais alto!";
  } else {
    resultado.innerText = "🔽 Mais baixo!";
  }

  contador.innerText = `Tentativas: ${tentativas}`;
  input.value = "";
  input.focus();
}