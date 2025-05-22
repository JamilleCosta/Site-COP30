function mostrarCuriosidade(index) {
      const curiosidades = [
        "A COP reúne representantes de mais de 190 países e cerca de 40 mil participantes.",
        "O Acordo de Paris foi assinado por 196 países em 2015 para conter o aquecimento global.",
        "A Amazônia abriga mais de 10% da biodiversidade mundial."
      ];

      const box = document.getElementById("curiosidade-box");
      const texto = document.getElementById("curiosidade-texto");

      texto.textContent = curiosidades[index];
      box.style.display = "block";
    }