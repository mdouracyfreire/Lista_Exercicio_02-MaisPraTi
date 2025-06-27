function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;
  const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) diasNoMes[1] = 29;
  return dia <= diasNoMes[mes - 1];
}

function testarData() {
  const dia = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value);
  const ano = parseInt(document.getElementById("ano").value);

  const resultado = ehDataValida(dia, mes, ano);
  document.getElementById("resultado").innerText = resultado ? "✅ Data Válida!" : "❌ Data Inválida!";
}
