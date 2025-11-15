const numSoftwaresInput = document.getElementById("numSoftwares");
const softwaresContainer = document.getElementById("softwaresContainer");

const numParametrosInput = document.getElementById("numParametros");
const parametrosContainer = document.getElementById("parametrosContainer");

// 🔹 Gera os campos de software dinamicamente
numSoftwaresInput.addEventListener("input", () => {
  softwaresContainer.innerHTML = "";
  const num = parseInt(numSoftwaresInput.value);

  if (!isNaN(num) && num > 0) {
    for (let i = 1; i <= num; i++) {
      const label = document.createElement("label");
      label.textContent = `Software/App ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.name = `software${i}`;
      input.required = true;
      input.style.marginBottom = "10px";

      softwaresContainer.appendChild(label);
      softwaresContainer.appendChild(input);
    }
  }
});

// 🔹 Gera os campos de parâmetros dinamicamente (permite 0)
numParametrosInput.addEventListener("input", () => {
  parametrosContainer.innerHTML = "";
  const num = parseInt(numParametrosInput.value);

  // Permite 0, 1, 2, etc...
  if (!isNaN(num) && num >= 0) {
    for (let i = 1; i <= num; i++) {
      const label = document.createElement("label");
      label.textContent = `Parâmetro ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.name = `parametro${i}`;
      input.required = true;
      input.style.marginBottom = "10px";

      parametrosContainer.appendChild(label);
      parametrosContainer.appendChild(input);
    }
  }
});

function gerarTextoAnalise() {
  const numSoft = parseInt(numSoftwaresInput.value);
  const numParam = parseInt(numParametrosInput.value);

  // 🔹 Validação ajustada para permitir 0 parâmetros
  if (isNaN(numSoft) || numSoft <= 0 || isNaN(numParam) || numParam < 0) {
    alert("Por favor, preencha todas as informações antes de gerar o texto.");
    return;
  }

  const softwares = [];
  for (let i = 1; i <= numSoft; i++) {
    const input = document.querySelector(`[name=software${i}]`);
    if (input && input.value.trim() !== "") softwares.push(input.value.trim());
  }

  const parametros = [];
  for (let i = 1; i <= numParam; i++) {
    const input = document.querySelector(`[name=parametro${i}]`);
    if (input && input.value.trim() !== "") parametros.push(input.value.trim());
  }

  if (softwares.length !== numSoft || (numParam > 0 && parametros.length !== numParam)) {
    alert("Preencha todos os campos antes de continuar.");
    return;
  }

  // 🔹 CORREÇÃO DO PLURAL/SINGULAR PARA SOFTWARES
  let textoSoftwares;
  if (softwares.length === 1) {
    textoSoftwares = `o software/app ${softwares[0]}`;
  } else {
    textoSoftwares = `os softwares/apps ${softwares.slice(0, -1).join(", ") + " e " + softwares.slice(-1)}`;
  }

  // 🔹 CORREÇÃO DO PLURAL/SINGULAR E CASO 0 PARÂMETROS
  let textoParametros;
  if (numParam === 0) {
    textoParametros = "não foram definidos parâmetros específicos para análise";
  } else if (parametros.length === 1) {
    textoParametros = `foi considerado 1 parâmetro principal: ${parametros[0]}`;
  } else {
    textoParametros = `foram considerados ${numParam} parâmetros principais: ${parametros.slice(0, -1).join(", ") + " e " + parametros.slice(-1)}`;
  }

  const texto =
    `A análise dos dados foi realizada utilizando ${textoSoftwares}. ` +
    `${textoParametros.charAt(0).toUpperCase() + textoParametros.slice(1)}. ` +
    `Essa análise possibilitou interpretar os resultados de forma mais precisa, garantindo maior confiabilidade às conclusões do estudo.`;

  const resultado = document.getElementById("resultado");
  resultado.innerText = texto;
  resultado.style.display = "block";

  // 🔹 Salva os softwares e parâmetros no localStorage
  localStorage.setItem("softwares", JSON.stringify(softwares));
  localStorage.setItem("parametros", JSON.stringify(parametros));
}