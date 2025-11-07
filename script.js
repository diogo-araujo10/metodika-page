function gerarTexto() {
  const abordagem = document.getElementById("abordagem").value;
  const natureza = document.getElementById("natureza").value;
  const objetivo = document.getElementById("objetivo").value;
  const procedimento = document.getElementById("procedimento").value;

  if (!abordagem || !natureza || !objetivo || !procedimento) {
    alert("Por favor, responda todas as perguntas antes de gerar o texto.");
    return;
  }

  const definicoes = {
    abordagem: {
      qualitativa: "centrada na compreensão de fenômenos subjetivos.",
      quantitativa: "mensurar e analisar a estatística dos dados.",
      "quali-quanti": "combinar elementos das abordagens qualitativa e quantitativa.",
    },
    natureza: {
      básica: "gerar novos conhecimentos, sem aplicação imediata.",
      aplicada: "resolver problemas práticos com aplicação direta.",
    },
    objetivo: {
      exploratória: "proporcionar maior familiaridade com o problema.",
      descritiva: "descrever as características de determinado fenômeno.",
      explicativa: "identificar os fatores que determinam ou contribuem para a ocorrência dos fenômenos.",
    },
    procedimento: {
      experimental: "envolve manipulação de variáveis em ambiente controlado.",
      bibliográfica: "baseada na análise de material já publicado.",
      documental: "analisa documentos que ainda não receberam tratamento analítico.",
      campo: "realizada diretamente no local onde ocorre o fenômeno.",
      "ex-post-facto": "analisa fatos já ocorridos, sem intervenção direta do pesquisador.",
      levantamento: "coleta dados diretamente com os participantes.",
      survey: "utiliza questionários estruturados para coletar dados.",
      "estudo de caso": "explora em profundidade um caso específico.",
      participante: "presença ativa do pesquisador no ambiente estudado.",
      ação: "visa intervir e transformar a realidade estudada.",
      etnográfica: "analisa a cultura de determinado grupo.",
      etnometodológica: "foca em como as pessoas constroem o sentido de suas ações no cotidiano.",
    }
  };

  const texto = 
    `A presente pesquisa adota uma abordagem ${abordagem}, caracterizada por ${definicoes.abordagem[abordagem]} ` +
    `Quanto à sua natureza, trata-se de uma investigação ${natureza}, cuja finalidade é ${definicoes.natureza[natureza]} ` +
    `Em relação aos objetivos, a pesquisa classifica-se como ${objetivo}, pois ${definicoes.objetivo[objetivo]} ` +
    `Para o alcance desses objetivos, foram adotados procedimentos metodológicos compatíveis com a proposta do estudo, sendo conduzida por meio de pesquisa ${procedimento}, o qual se define por ${definicoes.procedimento[procedimento]}.`;

  const resultado = document.getElementById("resultado");
  resultado.innerText = texto;
  resultado.style.display = "block";

  localStorage.setItem("textoMetodologia", texto);
}
