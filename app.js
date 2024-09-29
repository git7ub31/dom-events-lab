/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")

/*-------------------------------- Variables --------------------------------*/
let firstDigit = ""
let secondDigit = ""
let operator = ""
/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      const screenElement = document.createElement("li")
      screenElement.textContent = target.innerText //input has been added to HTML
      display.appendChild(screenElement);
      // console.log(inputElement);
      // console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
  

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);}
  )
  
    // do one for each kind of button class
    if (event.target.classList.contains('number')) {
       firstDigit += event.target.innerText;
       display.value = firstDigit;
    }

    if (event.target.classList.contains('operator') || event.target.classList.contains('equals')) {
      operator = event.target.innerText;
      display.value = operator;
   }

// Example
  //   if (event.target.innerText === '*') {
       
  //   }
  // });
  
/*-------------------------------- Functions --------------------------------*/
//do all of the combinations
const doCalculations = (first, second, operator) => {
  let calculation = 0;
  if(operator === "+"){
    calculation = first + second;
  }else if(operator === "-"){
    calculation = first - second;
  }else if(operator=== "*"){
    calculation = first * second;
  }else if(operator === "/"){
    calculation = first / second;
  }
}

doCalculations();
