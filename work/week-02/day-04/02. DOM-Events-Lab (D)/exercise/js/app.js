

/*-------------------------------- Constants --------------------------------*/

let numbers = document.querySelectorAll(".number");

let operationBtns = document.querySelectorAll(".operation");

let totalDisplay = document.querySelector(".display");

let equalsBtn = document.querySelector(".equals");

let clearBtn = document.querySelector(".clear");

/*-------------------------------- Variables --------------------------------*/
let nums1 = [];
let nums2 = [];
let num1 = 0
let num2 = 0
let result = 0
let operator = null
// let readyToCal = false
/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator');
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (evnt) => {
    
    
    buildEquation(evnt) // Assign input numbers to nums1 and nums2 list
    if (evnt.target.innerText === '=')
        calculate(result,num2,operator)
    if (evnt.target.innerText === 'C')
        reset()

});

/*-------------------------------- Functions --------------------------------*/

function buildEquation(el) {
    firstOrSecond(el)
    if (el.target.classList.contains('operator'))
        operator = el.target.innerText
    }

function firstOrSecond(el) {
        if(!operator && nums2.length === 0  &&  el.target.classList.contains('number')){
            nums1.push(el.target.innerText)
            result = parseInt(nums1.join(''))
            totalDisplay.innerText = result 

        }
        else if(operator && nums1.length > 0  &&  el.target.classList.contains('number')){
            nums2.push(el.target.innerText)
             num2 = parseInt(nums2.join(''))
             totalDisplay.innerText = num2
        }
        
}

function calculate(num1, num2, operator) {
        if (operator === "+") {
        result +=  num2;
    } else if (operator === "-") {
        result -=  num2;
    } else if (operator === "*") {
        result *= num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result /= num2;
        }
    } else {
        result = "Error";
    }
    totalDisplay.innerText = result
}


function isType(target) {
    if (target.classList.contains('number'))
        return 'number'
    if (target.classList.contains('operator'))
        return 'operator'
}


function reset() {
    nums1 = []
    nums2 = []
    num1 = 0
    num2 = 0
    result = 0
    operator = null
    totalDisplay.innerText = result
}







