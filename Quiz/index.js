const perguntas = [
    { pergunta: "1. Em que cidade ocorrerá a COP30?", opcoes: ["Manaus", "Belém", "Rio de Janeiro"], correta: 1 },
    { pergunta: "2. O que significa COP?", opcoes: ["Conferência Oficial do Planeta", "Convenção sobre o Oceano Pacífico", "Conferência das Partes"], correta: 2 },
    { pergunta: "3. Qual o principal objetivo da COP?", opcoes: ["Promover o turismo verde", "Discutir e combater as mudanças climáticas", "Aumentar exportações"], correta: 1 },
    { pergunta: "4. Em que ano foi assinado o Acordo de Paris?", opcoes: ["2015", "2009", "2021"], correta: 0 },
    { pergunta: "5. O Acordo de Paris foi assinado em qual COP?", opcoes: ["COP15", "COP21", "COP30"], correta: 1 },
    { pergunta: "6. Qual país será sede da COP30?", opcoes: ["Colômbia", "Brasil", "Peru"], correta: 1 },
    { pergunta: "7. Qual região brasileira sediará a COP30?", opcoes: ["Sudeste", "Sul", "Norte"], correta: 2 },
    { pergunta: "8. Qual desses é um objetivo sustentável?", opcoes: ["Aumentar o consumo de plástico", "Reduzir emissões de carbono", "Expandir o desmatamento"], correta: 1 },
    { pergunta: "9. Qual cidade brasileira sediará a COP30?", opcoes: ["Manaus", "Belém", "São Paulo"], correta: 1 },
    { pergunta: "10. O que representa a justiça climática?", opcoes: ["Leis rígidas para empresas", "Multas para poluidores", "Equidade para povos afetados pelas mudanças climáticas"], correta: 2 }
  ];

  function carregarPerguntas() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    perguntas.forEach((item, i) => {
      const bloco = document.createElement("div");
      bloco.className = "pergunta";
      let html = `<p><strong>${item.pergunta}</strong></p>`;
      item.opcoes.forEach((op, index) => {
        html += `
          <label class="opcao">
            <input type="radio" name="q${i}" value="${index}">
            <span class="custom-radio"></span> ${op}
          </label>`;
      });
      bloco.innerHTML = html;
      container.appendChild(bloco);
    });

    document.getElementById("resultado").style.display = "none";
    document.getElementById("retry-btn").style.display = "none";
  }

  function verResultado() {
    perguntas.forEach((pergunta, i) => {
      const marcada = document.querySelector(`input[name="q${i}"]:checked`);
      const bloco = document.querySelectorAll(".pergunta")[i];
      bloco.classList.remove("acertou", "errou");

      if (marcada && parseInt(marcada.value) === pergunta.correta) {
        bloco.classList.add("acertou");
      } else {
        bloco.classList.add("errou");
      }
    });

    document.getElementById("resultado").style.display = "none";
    document.getElementById("retry-btn").style.display = "inline-block";
    window.scrollTo({ top: document.getElementById("quiz-container").offsetTop - 40, behavior: "smooth" });
  }

  function reiniciarQuiz() {
    document.getElementById("quiz-form").reset();
    carregarPerguntas();
  }

  window.onload = carregarPerguntas;

