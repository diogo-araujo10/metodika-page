function gerarObtido() {
  const obtido = document.getElementById("obtido").value.trim();
  const resultado = document.getElementById("resultado");

  if (!obtido) {
    resultado.style.display = "block";
    resultado.innerHTML = "⚠️ Por favor, descreva o resultado antes de gerar o texto.";
    return;
  }

  const texto = `Dessa forma, o resultado alcançado foi: ${obtido}`;

  resultado.style.display = "block";
  resultado.innerHTML = texto;

  // 🔹 Salva no localStorage
  localStorage.setItem("obtido", obtido);
}
