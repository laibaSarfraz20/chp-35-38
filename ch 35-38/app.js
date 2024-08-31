function displayCurrentDateTime() {
   let now = new Date();
   let formattedDate = now.toLocaleString(); 
   document.write("Current Date and Time:", formattedDate);
  }
  displayCurrentDateTime();
//   2
function addNumbers(num1, num2) {
    let  sum = num1 + num2;
    return sum;
  }
  

  let  result = addNumbers(5, 3);
  document.write(`The sum of 5 and 3 is: ${result}`); // Output: The sum of 5 and 3 is: 8
// 3

function calculate(num1, num2, operator) {
    let result;
  
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      if (num2 === 0) {
        console.error("Error: Division by zero!");
        return; 
      }
      result = num1 / num2;
    } else {
      console.error("Invalid operator!");
      return; 
    }
  
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  }
  

  calculate(10, 2, "+");
  calculate(8, 4, "-"); 
  calculate(5, 3, "*"); 
  calculate(12, 3, "/"); 
  calculate(10, 0, "/");
  calculate(7, 2, "%"); 
  
// 4
function square(number) {
    return number * number;
  }
  
  
  let squaredValue = square(4);
  document.write(`The square of 4 is: ${squaredValue}`); 
// 5
function factorial(number) {
    if (number === 0) {
      return 1; 
    } else {
      return number * factorial(number - 1);
    }
  }

  let  fact = factorial(5);
  document.write(`The factorial of 5 is: ${fact}`); 

//   6
function count(start, end) {
    if (start > end) {
     alert("Error: Start number must be less than or equal to end number.");
      return; 
    }
  
    for (let i = start; i <= end; i++) {
        document.write(i);
    }
  }
  count(1, 10); 
  count(5, 3);
// 7
function calculateHypotenuse(base, perpendicular) {
    let  squaredHypotenuse = base * base + perpendicular * perpendicular;
    let  hypotenuse = Math.sqrt(squaredHypotenuse);
    return hypotenuse;
  }
// 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
      return num * num;
    }
    let  squaredBase = calculateSquare(base);
    let  squaredPerpendicular = calculateSquare(perpendicular);
    let  squaredHypotenuse = squaredBase + squaredPerpendicular;
    let  hypotenuse = Math.sqrt(squaredHypotenuse);
  
    return hypotenuse;
  }
  let  result = calculateHypotenuse(3, 4);
  document.write(`The hypotenuse is: ${result}`); 
  