function gerarRevisao() {
  // Coletar dados dos campos
  const temaCentral = document.getElementById("temaCentral").value.trim();
  const subtemas = document.getElementById("subtemas").value.trim();
  const palavrasChave = document.getElementById("palavrasChave").value.trim();
  const periodo = document.getElementById("periodo").value.trim();
  const basesDados = document.getElementById("basesDados").value.trim();

  const resultado = document.getElementById("resultado");

  // Validações
  if (!temaCentral || !subtemas || !palavrasChave || !periodo || !basesDados) {
    resultado.style.display = "block";
    resultado.innerHTML = "⚠️ Por favor, preencha todos os campos antes de gerar o texto.";
    return;
  }

  // Gerar texto formatado
  const texto = `A revisão de literatura foi iniciada com base no tema ${temaCentral}, com foco nos subtemas ${subtemas}. 
As buscas foram realizadas utilizando as palavras-chave ${palavrasChave}, considerando publicações do período ${periodo} e consultando a(s) base(s) ${basesDados}.`;

  // Exibir resultado
  resultado.style.display = "block";
  resultado.innerHTML = texto;

  // 🔹 Salvar no localStorage
  const dadosRevisao = {
    temaCentral,
    subtemas,
    palavrasChave,
    periodo,
    basesDados
  };
  localStorage.setItem("revisaoLiteratura", JSON.stringify(dadosRevisao));
}

// Modal ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modalInstrucoes').style.display = 'flex';
});

// Funções do modal
function fecharModal() {
  document.getElementById('modalInstrucoes').style.display = 'none';
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById('modalInstrucoes');
  if (event.target === modal) {
    fecharModal();
  }
});