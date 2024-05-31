const displayOperationContainer = document.querySelector(".display-operation");
const finalScoreScreen = document.querySelector(".final-score");
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
  const displayOperationScreen = document.querySelector(".display-operation");

  if (displayOperationScreen.textContent === "00") return;

  if (dataOption === "del") {
    const arrayNumber = displayOperationScreen.textContent.split("");
    const newNumber = arrayNumber
      .splice(0, displayOperationScreen.textContent.length - 1)
      .join("");

      displayOperationScreen.textContent = newNumber;

    if (displayOperationScreen.textContent.length === 0) {
      displayOperationScreen.textContent = "";
      finalScoreScreen.textContent = "00";
      firstValue = "";
      lastValue = "";
      operationValue = "";
      isEmptyScreen = true;
    }
  }
}

function setNumber(dataNumber) {
  if (!dataNumber) return;
  const displayOperationScreen = document.querySelector(".display-operation");

  if (isEmptyScreen || displayOperationScreen.textContent === "") {
    displayOperationScreen.textContent = "";
    isEmptyScreen = false;
  }

  displayOperationScreen.textContent += dataNumber;

  if (!operationValue) {
    firstValue += dataNumber;
    console.log(firstValue);
  } else {
    lastValue += dataNumber;
  }
}

const operations = {
  sum: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
  porcent: "%"
};

function setOperation(dataOperation) {
  const displayOperationScreen = document.querySelector(".display-operation");

  if (operationValue && lastValue) {
    calculateResult();
  }

  if (!firstValue) return;

  operationValue = dataOperation;
  displayOperationScreen.textContent += " " + operations[dataOperation] + " ";
  isEmptyScreen = false;

  // displayOperationScreen.textContent = operations[dataOperation];

  // const firstValueSpan = document.createElement("span");
  // firstValueSpan.textContent = firstValue;

  // if (displayOperationContainer.children.length === 0) {
  //   displayOperationContainer.appendChild(firstValueSpan);
  // }

  // if (operationValue) return;

}

function calculateResult() {
  if (!firstValue || !operationValue || !lastValue) return;

  const displayOperationScreen = document.querySelector(".display-operation");
  let result = 0;
  const firstNumber = parseFloat(firstValue);
  const secondNumber = parseFloat(lastValue);

  switch (operationValue) {
    case "sum":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      if (secondNumber === 0) {
        alert("No puedes dividir por cero :v");
        return
      }
      result = firstNumber / secondNumber;
      break;
    case "porcent":
      result = (firstNumber * secondNumber) / 100;  
      break;
    default:
      return;
  }

  finalScoreScreen.textContent = result;
  finalScoreScreen.textContent = firstValue + " " + operations[dataOperation] + " ";
  firstValue = result.toString();
  lastValue = "";
  operationValue = "";
  isEmptyScreen = true;
}

function isEmpty() {
  if (isEmptyScreen) {
    // const finalScoreScreen = document.querySelector(".final-score");
    if (finalScoreScreen.textContent === "") {
      finalScoreScreen.textContent = "00";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  main();
  isEmpty();
});
