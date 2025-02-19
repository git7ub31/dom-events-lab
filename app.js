/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let firstDigit = "";
let secondDigit = "";
let operator = "";

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (event.target.classList.contains('number')) {
      if (!operator) {
        firstDigit += value;
        display.innerText = firstDigit;
      } else {
        secondDigit += value;
        display.innerText = secondDigit;
      }
    }

    if (event.target.classList.contains('operator')) {
      if (firstDigit && secondDigit) {
        firstDigit = doCalculation(parseInt(firstDigit), parseInt(secondDigit), operator);
        secondDigit = "";
      }
      operator = value;
    }

    if (event.target.classList.contains('equals')) {
      if (firstDigit && secondDigit) {
        firstDigit = doCalculation(parseInt(firstDigit), parseInt(secondDigit), operator);
        secondDigit = "";
        display.innerText = firstDigit; 
        operator = "";
      }
    }

    if (event.target.classList.contains('operator') && value === 'C') {
      firstDigit = "";
      secondDigit = "";
      operator = "";
      display.innerText = "";
    }
  });
});

/*-------------------------------- Functions --------------------------------*/

const doCalculation = (first, second, operator) => {
  let calculation = 0;

  if (operator === "+") {
    calculation = first + second;
  } else if (operator === "-") {
    calculation = first - second;
  } else if (operator === "*") {
    calculation = first * second;
  } else if (operator === "/") {
    calculation = first / second;
  }

  return calculation;
};
