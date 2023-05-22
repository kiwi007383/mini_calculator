let result = document.getElementById("result");

let finalResult;

let oneError = document.getElementById("oneError");
let twoError = document.getElementById("twoError");
let operatorError = document.getElementById("operatorError");

let btn = document.getElementById("btnCalculate");

let numOneStatus, numTwoStatus, operationStatus = false;


oneError.style.display = "none";
twoError.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", function () {
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let operation = document.getElementById("operation");

     checkValidation(firstNumber,secondNumber,operation);
   
    if (!numOneStatus && !numTwoStatus && !operationStatus) {
        firstNumber = parseInt(firstNumber.value);
        secondNumber = parseInt(secondNumber.value);

    switch (operation.value) {
        case "add":
            finalResult = firstNumber + secondNumber;
            break;
        case "minus":
            finalResult = firstNumber - secondNumber;
            break;
        case "multiply":
            finalResult = firstNumber * secondNumber;
            break;
         case "division":
            finalResult = firstNumber / secondNumber;
            break;
        case "default":
            console.log("error");
    }
    result.innerHTML = finalResult;
}
})

function checkValidation(firstNumber,secondNumber,operation) {
    if (firstNumber.value == "" || firstNumber.value == undefined || firstNumber.value == null) {
        oneError.style.display = "block";
        numOneStatus = true;    
    } else {
        oneError.style.display = "none";  
        numOneStatus = false;    
    }
    if (secondNumber.value == "" || secondNumber.value == undefined || secondNumber.value == null) {
        twoError.style.display = "block";  
        numTwoStatus = true;    
    } else {  
        twoError.style.display = "none";  
        numTwoStatus = false;  
    }
    if (operation.value == "empty") {
        operatorError.style.display = "block";
        operationStatus = true; 
    } else {
        operatorError.style.display = "none";  
        operationStatus = false;
    }
}