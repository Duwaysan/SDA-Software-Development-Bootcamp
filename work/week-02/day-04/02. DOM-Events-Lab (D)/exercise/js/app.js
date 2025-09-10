const buttons = document.querySelectorAll('.button');

// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     console.log(event.target.innerText);
//     // Future logic to capture the button's value would go here...
//   });
// });

let firstNum = 0
let secondNum = 0
let operator = null

const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
// console.log(event.target.innerText);
input = event.target
function ifNumber(target){
    return target.classList.contains('number')
}
function ifOperator(target){
    return target.classList.contains('operator')
}


 
    if(ifNumber(input) && firstNum === 0)
        firstNum = input.innerText
    console.log(firstNum)
    if (ifOperator(input) && firstNum !==0 && secondNum === 0)
    
    if(ifNumber(input) && firstNum === 0)











//   // Example
//   if (event.target.classList.contains('number')) {
//     // Do something with a number
//     console.log(event.target.classList)
//   }

//   // Example
//   if (event.target.classList.contains('operator')) {
//     // Do something with this operator
//     console.log(event.target.classList)
//   }
});