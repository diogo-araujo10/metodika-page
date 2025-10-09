function gerarProblema() {
  const problema = document.getElementById("problema").value.trim();
  const resultado = document.getElementById("resultado");

  if (!problema) {
    resultado.style.display = "block";
    resultado.innerHTML = "⚠️ Por favor, descreva a situação antes de gerar o texto.";
    return;
  }

  const texto = `O problema identificado nesta pesquisa está relacionado a: ${problema}. 
Esse cenário justifica a necessidade de um estudo mais aprofundado para compreender suas causas e buscar soluções.`;

  resultado.style.display = "block";
  resultado.innerHTML = texto;

   // 🔹 Salva no localStorage
  localStorage.setItem("problema", problema);
}
