function gerarTexto() {
  // Pegando valores dos campos
  const dataInicio = document.getElementById("dataInicio").value;
  const dataFim = document.getElementById("dataFim").value;
  const baseDados = document.getElementById("baseDados").value;
  const checkboxes = document.querySelectorAll("input[name='coleta']:checked");

  // Validação
  if (!dataInicio || !dataFim || !baseDados || checkboxes.length === 0) {
    alert("Por favor, preencha todos os campos e selecione pelo menos uma forma de coleta.");
    return;
  }

  // Formatando datas (de AAAA-MM-DD para DD/MM/AAAA)
  const inicioFormatado = new Date(dataInicio).toLocaleDateString("pt-BR");
  const fimFormatado = new Date(dataFim).toLocaleDateString("pt-BR");

  // Métodos de coleta
  const metodosColeta = Array.from(checkboxes)
    .map(c => c.value)
    .join(", ");

  // Texto final
  const texto = `A coleta de dados foi realizada no período de ${inicioFormatado} até ${fimFormatado}, utilizando como base de dados ${baseDados.toLowerCase()}. Os dados foram coletados por meio de ${metodosColeta}.`;

  // Exibir resultado
  const resultado = document.getElementById("resultado");
  resultado.innerText = texto;
  resultado.style.display = "block";

  // 🔹 Salva no localStorage
  localStorage.setItem("baseDados", baseDados);
  localStorage.setItem("metodosColeta", metodosColeta);
}
