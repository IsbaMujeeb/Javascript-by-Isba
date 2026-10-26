
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculateBtn");
const message = document.getElementById("message");
const resultDisplay = document.getElementById("result");

calculateBtn.addEventListener("click", function() {

   
    message.textContent = "";
    resultDisplay.textContent = "—";

    try {
      
        if (num1.value === "" || num2.value === "") {
            throw new Error("Please enter both numbers!");
        }

       
        const firstNum = Number(num1.value);
        const secondNum = Number(num2.value);
        const selectedOperator = operator.value;

        
        if (selectedOperator === "/" && secondNum === 0) {
            throw new Error("Cannot divide by zero!");
        }

    
        let answer;

        if (selectedOperator === "+") {
            answer = firstNum + secondNum;
        }
        else if (selectedOperator === "-") {
            answer = firstNum - secondNum;
        }
        else if (selectedOperator === "*") {
            answer = firstNum * secondNum;
        }
        else if (selectedOperator === "/") {
            answer = firstNum / secondNum;
        }
        else {
            throw new Error("Invalid operator!");
        }

      
        resultDisplay.textContent = answer;
        message.textContent = "Calculation successful!";

    } 
    catch (error) {
       
        message.textContent = error.message;
        
    } 
    finally {
    
        console.log("Calculation attempt finished.");
    }

});
