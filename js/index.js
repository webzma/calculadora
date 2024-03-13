function main() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setOption(button.getAttribute("data-option"));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});

// En esta función se controlarán todos los botones de tipo option (observar atributo 'data' de cada botón)
function setOption(dataOption) {
  const finalScoreScreen = document.querySelector(".final-score");

  if (finalScoreScreen.textContent === "00") return;

  if (dataOption === "del") {
    const neww = finalScoreScreen.textContent.split("");
    const newValue = neww
      .splice(0, finalScoreScreen.textContent.length - 1)
      .join("");

    finalScoreScreen.textContent = newValue;

    if (finalScoreScreen.textContent.length === 0) {
      finalScoreScreen.textContent = "00";
    }
  }
}
