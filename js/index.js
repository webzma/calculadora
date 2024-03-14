function main() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setOption(button.getAttribute("data-option"));
      setNumber(button.getAttribute("data-number"));
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
    const arrayNumber = finalScoreScreen.textContent.split("");
    const newNumber = arrayNumber
      .splice(0, finalScoreScreen.textContent.length - 1)
      .join("");

    finalScoreScreen.textContent = newNumber;

    if (finalScoreScreen.textContent.length === 0) {
      finalScoreScreen.textContent = "00";
    }
  }
}

function setNumber(dataNumber) {
  if (!dataNumber) return;
  const finalScoreScreen = document.querySelector(".final-score");
  finalScoreScreen.textContent += dataNumber;
}
