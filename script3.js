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

// 🔹 Gera os campos de parâmetros dinamicamente
numParametrosInput.addEventListener("input", () => {
  parametrosContainer.innerHTML = "";
  const num = parseInt(numParametrosInput.value);

  if (!isNaN(num) && num > 0) {
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

  if (isNaN(numSoft) || numSoft <= 0 || isNaN(numParam) || numParam <= 0) {
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

  if (softwares.length !== numSoft || parametros.length !== numParam) {
    alert("Preencha todos os campos antes de continuar.");
    return;
  }

  const texto =
    `A análise dos dados foi realizada utilizando os softwares/apps ${softwares.join(", ")}. ` +
    `Foram considerados ${numParam} parâmetros principais: ${parametros.join(", ")}. ` +
    `Essa análise possibilitou interpretar os resultados de forma mais precisa, garantindo maior confiabilidade às conclusões do estudo.`;

  const resultado = document.getElementById("resultado");
  resultado.innerText = texto;
  resultado.style.display = "block";

  // 🔹 Salva os softwares e parâmetros no localStorage
  localStorage.setItem("softwares", JSON.stringify(softwares));
  localStorage.setItem("parametros", JSON.stringify(parametros));
}
