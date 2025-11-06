function gerarTexto() {
  // Pegando valores dos campos
  const dataInicio = document.getElementById("dataInicio").value;
  const dataFim = document.getElementById("dataFim").value;
  const baseDados = document.getElementById("baseDados").value;
  const checkboxes = document.querySelectorAll("input[name='coleta']:checked");

  // Arrays para armazenar as partes do texto
  const partesTexto = [];

  // 1. Período da coleta (se preenchido) - CORREÇÃO DO FUSO HORÁRIO
  if (dataInicio && dataFim) {
    // Correção para evitar problema de fuso horário
    const corrigirFusoHorario = (dataString) => {
      const [ano, mes, dia] = dataString.split('-');
      return new Date(ano, mes - 1, dia); // mes - 1 porque Date usa 0-11
    };
    
    const inicioFormatado = corrigirFusoHorario(dataInicio).toLocaleDateString("pt-BR");
    const fimFormatado = corrigirFusoHorario(dataFim).toLocaleDateString("pt-BR");
    partesTexto.push(`A coleta de dados foi realizada no período de ${inicioFormatado} até ${fimFormatado}`);
  }

  // 2. Base de dados (se selecionada)
  if (baseDados) {
    partesTexto.push(`utilizando como base de dados ${baseDados.toLowerCase()}`);
  }

  // 3. Métodos de coleta (se selecionados) - COM "E" ANTES DO ÚLTIMO
  if (checkboxes.length > 0) {
    const metodosArray = Array.from(checkboxes).map(c => c.value);
    
    let metodosColeta;
    if (metodosArray.length === 1) {
      metodosColeta = metodosArray[0];
    } else {
      // Junta todos com vírgula e coloca "e" antes do último
      metodosColeta = metodosArray.slice(0, -1).join(", ") + " e " + metodosArray.slice(-1);
    }
    
    partesTexto.push(`os dados foram coletados por meio de ${metodosColeta}`);
  }

  // Verifica se pelo menos algum campo foi preenchido
  if (partesTexto.length === 0) {
    alert("Por favor, preencha pelo menos um campo para gerar o texto.");
    return;
  }

  // Junta todas as partes do texto
  let textoFinal = partesTexto.join(", ");
  
  // Corrige a primeira letra para maiúscula e adiciona ponto final
  textoFinal = textoFinal.charAt(0).toUpperCase() + textoFinal.slice(1) + '.';

  // Exibir resultado
  const resultado = document.getElementById("resultado");
  resultado.innerText = textoFinal;
  resultado.style.display = "block";

  // 🔹 Salva no localStorage (apenas o que foi preenchido)
  if (baseDados) localStorage.setItem("baseDados", baseDados);
  if (checkboxes.length > 0) {
    const metodosColeta = Array.from(checkboxes).map(c => c.value).join(", ");
    localStorage.setItem("metodosColeta", metodosColeta);
  }
}