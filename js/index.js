const displayOperationContainer = document.querySelector(".display-operation");
let firstValue = "";
let isEmptyScreen = true;
let operationValue = "";
let lastValue = "";

function main() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-option")) {
        setOption(button.getAttribute("data-option"));
      }

      if (button.getAttribute("data-number")) {
        setNumber(button.getAttribute("data-number"));
      }

      if (button.getAttribute("data-operation")) {
        setOperation(button.getAttribute("data-operation"));
      }
    });
  });
}

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

  if (isEmptyScreen) {
    finalScoreScreen.textContent = "";
    isEmptyScreen = false;
  }

  finalScoreScreen.textContent += dataNumber;
  firstValue += dataNumber;
  console.log(firstValue);
}

const operations = {
  sum: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

function setOperation(dataOperation) {
  const finalScoreScreen = document.querySelector(".final-score");
  finalScoreScreen.textContent = operations[dataOperation];

  const firstValueSpan = document.createElement("span");
  firstValueSpan.textContent = firstValue;

  if (displayOperationContainer.children.length === 0) {
    displayOperationContainer.appendChild(firstValueSpan);
  }
}

function isEmpty() {
  if (isEmptyScreen) {
    const finalScoreScreen = document.querySelector(".final-score");
    if (finalScoreScreen.textContent === "") {
      finalScoreScreen.textContent = "00";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  main();
  isEmpty();
});
