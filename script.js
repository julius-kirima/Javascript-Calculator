const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const resultDisplay = document.getElementById("result");
const historyList = document.getElementById("historyList");

const history = [];

function getNumbers () {
    return {
        first: Number(firstNumber.value),
        second: Number(secondNumber.value)
    }
}

function add(a , b) {
    return a + b
}

function  subtract(a,b) {
    return a - b
}

function multiply(a , b) {
    return a * b
}

function divide(a , b) {
    if (b === 0) {
        return " Cannot be Zero "
    }

    return a / b
}

function displayResult (result) {
    resultDisplay.textContent = result
}

function addToHistory(calculation) {
    history.push(calculation)

    const historyItem = document.createElement("li");
    historyItem.textContent = calculation;
    historyList.appendChild(historyItem);
}

function calculate(operation, symbol, callback) {
    const numbers = getNumbers();
    const result = callback(numbers.first, numbers.second);

    displayResult(result);

    if (typeof result === "number") {
        const calculation =
            `${numbers.first} ${symbol} ${numbers.second} = ${result}`;

        addToHistory(calculation);
    }
}

document.querySelector("#addButton").addEventListener("click", () => {
    calculate("add", "+", add);
});

document.querySelector("#subtractButton").addEventListener("click", () => {
    calculate("subtract", "-", subtract);
});

document.querySelector("#multiplyButton").addEventListener("click", () => {
    calculate("multiply", "×", multiply);
});

document.querySelector("#divideButton").addEventListener("click", () => {
    calculate("divide", "÷", divide);
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    history.length = 0;
    historyList.innerHTML = "";
});