function gerarEstrutura() {
  // Coletar dados dos checkboxes
  const fontesCheckboxes = document.querySelectorAll('input[name="fontes"]:checked');
  const abordagensCheckboxes = document.querySelectorAll('input[name="abordagens"]:checked');
  const sugestoesArea = document.getElementById("sugestoesArea").value.trim();
  
  const resultado = document.getElementById("resultado");

  // Validações
  if (fontesCheckboxes.length === 0 || abordagensCheckboxes.length === 0) {
    resultado.innerText = "⚠️ Por favor, selecione pelo menos uma opção em cada seção (Fontes e Abordagens).";
    resultado.style.display = "block";
    return;
  }

  // Arrays para armazenar as partes do texto
  const partesTexto = [];

  // 1. Processar fontes (singular/plural)
  if (fontesCheckboxes.length > 0) {
    const fontesArray = Array.from(fontesCheckboxes).map(c => c.value);
    
    let fontesTexto;
    if (fontesArray.length === 1) {
      fontesTexto = fontesArray[0].toLowerCase();
    } else {
      fontesTexto = fontesArray.slice(0, -1).join(", ") + " e " + fontesArray.slice(-1);
    }
    
    partesTexto.push(`foram consideradas diferentes categorias de fontes, tais como ${fontesTexto}`);
  }

  // 2. Processar abordagens (singular/plural)
  if (abordagensCheckboxes.length > 0) {
    const abordagensArray = Array.from(abordagensCheckboxes).map(c => c.value);
    
    let abordagensTexto;
    if (abordagensArray.length === 1) {
      abordagensTexto = abordagensArray[0].toLowerCase();
    } else {
      abordagensTexto = abordagensArray.slice(0, -1).join(", ") + " e " + abordagensArray.slice(-1);
    }
    
    partesTexto.push(`abordagens teóricas como ${abordagensTexto}`);
  }

  // 3. Sugestões de área (se preenchido)
  if (sugestoesArea) {
    partesTexto.push(`com foco na área de ${sugestoesArea}`);
  }

  // Junta todas as partes do texto
  let textoFinal = "Para orientar a estruturação da revisão de literatura, " + partesTexto.join(", ");
  
  // Adiciona a parte final fixa
  textoFinal += ". Essas escolhas contribuíram para uma análise consistente e alinhada às recomendações metodológicas da área, garantindo a qualidade e a representatividade dos estudos selecionados.";

  // Corrige a primeira letra para maiúscula
  textoFinal = textoFinal.charAt(0).toUpperCase() + textoFinal.slice(1);

  // Exibir resultado
  resultado.innerText = textoFinal;
  resultado.style.display = "block";

  // 🔹 Salvar no localStorage
  const dadosEstrutura = {
    fontes: Array.from(fontesCheckboxes).map(c => c.value),
    abordagens: Array.from(abordagensCheckboxes).map(c => c.value),
    sugestoesArea: sugestoesArea
  };
  localStorage.setItem("estruturacaoRevisao", JSON.stringify(dadosEstrutura));
  localStorage.setItem("textoEstrutura", textoFinal);
}

// Função para limpar dados da estruturação quando o usuário navegar sem preencher
function limparDadosEstrutura() {
  localStorage.removeItem('estruturacaoRevisao');
  localStorage.removeItem('textoEstrutura');
  console.log('Dados de estruturação limpos!');
}

// Modificar o botão de próxima página para limpar os dados antes de navegar
document.addEventListener('DOMContentLoaded', function() {
  const btnProxima = document.querySelector('.secondary-btn');
  if (btnProxima) {
    // Remover o onclick direto do HTML e adicionar event listener
    btnProxima.onclick = null;
    btnProxima.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Verificar se o formulário foi preenchido
      const fontesCheckboxes = document.querySelectorAll('input[name="fontes"]:checked');
      const abordagensCheckboxes = document.querySelectorAll('input[name="abordagens"]:checked');
      const sugestoesArea = document.getElementById("sugestoesArea").value.trim();
      
      // Se não preencheu nada, limpa os dados
      if (fontesCheckboxes.length === 0 && abordagensCheckboxes.length === 0 && !sugestoesArea) {
        limparDadosEstrutura();
      }
      
      window.location.href = 'metodologia.html';
    });
  }
});

// Também limpar dados se o usuário recarregar a página sem preencher
window.addEventListener('beforeunload', function() {
  const fontesCheckboxes = document.querySelectorAll('input[name="fontes"]:checked');
  const abordagensCheckboxes = document.querySelectorAll('input[name="abordagens"]:checked');
  const sugestoesArea = document.getElementById("sugestoesArea").value.trim();
  
  if (fontesCheckboxes.length === 0 && abordagensCheckboxes.length === 0 && !sugestoesArea) {
    limparDadosEstrutura();
  }
});

// Modal ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modalInstrucoes');
  if (modal) {
    modal.style.display = 'flex';
  }
});

// Funções do modal
function fecharModal() {
  const modal = document.getElementById('modalInstrucoes');
  if (modal) {
    modal.style.display = 'none';
  }
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById('modalInstrucoes');
  if (modal && event.target === modal) {
    fecharModal();
  }
});