/*
https://digitalcrafts.instructure.com/courses/190/pages/group-in-class-activity-calculator?module_item_id=27454
*/
// let numbers = document.querySelectorAll(".numbers div");
// let operations = document.querySelectorAll(".operators div");
// let input = document.getElementById("input");
// let numbersToCalculate = [];

// let decimalFlag = false;
// let operandFlag = false;

// let arrayOfNumbers = [];
// let arrayOfOperations = [];

// for (let i = 0; i < numbers.length; i++) {
//   // Add an event listener to all divs/button
//   numbers[i].addEventListener("click", (e) => {
//     if (numbers[i].innerHTML != "C" && numbers[i].innerHTML != ".") {
//       arrayOfNumbers.push(numbers[i].innerHTML);
//       operandFlag = false;
//       console.log(arrayOfNumbers);
//       console.log(operandFlag);
//       input.innerHTML += e.target.innerHTML;
//     }

//     if (e.target.innerHTML == "C") {
//       console.log(e.target.innerHTML);
//       decimalFlag = false;
//       operandFlag = false;
//       input.innerHTML = "";
//       arrayOfNumbers = [];
//       arrayOfOperations = [];
//       console.log("Array of Operations", arrayOfOperations);
//       console.log("Array of Operations", arrayOfOperations);
//     }
//     // If it is a decimal, push to array
//     if (!decimalFlag && e.target.innerHTML == ".") {
//       input.innerHTML += e.target.innerHTML;
//       decimalFlag = true;
//       console.log("Decimal?", decimalFlag);
//       arrayOfNumbers.push(e.target.innerHTML);
//     } else if (decimalFlag) {
//       console.log("Decimal pressed again");
//       console.log("decimal flag?", decimalFlag);
//     }
//   });
// }

// for (let i = 0; i < operations.length; i++) {
//   operations[i].addEventListener("click", (e) => {
//     if (operandFlag == false && input.innerHTML != "") {
//       decimalFlag = false;
//       combineArrayNumbers();
//       arrayOfOperations.push(operations[i].innerHTML);
//       operandFlag = true;
//       console.log("Array of Operations", arrayOfOperations); //same thing as console.log("Array of Operations", arrayOfOperations)
//       console.log("Operations?", operandFlag);
//     }
//   });
// }

// function addOperation() {}

// function combineArrayNumbers() {
//   // get the numbers array;
//   // slice array and then combine
//   arrayOfNumbers.parseInt();
//   numbersToCalculate.push(arrayOfNumbers.join(""));
//   arrayOfNumbers = [];
//   console.log("Concat string: ", numbersToCalculate);
// }

// UPDATED CODE WE LEFT OFF WITH:
/*
https://digitalcrafts.instructure.com/courses/190/pages/group-in-class-activity-calculator?module_item_id=27454
*/
let numbers = document.querySelectorAll(".numbers div");
let operations = document.querySelectorAll(".operators div");
let input = document.getElementById("input");
let equal = document.getElementById("result");
let numbersToCalculate = [];

let decimalFlag = false;
let operandFlag = false;

let arrayOfNumbers = [];
let arrayOfOperations = [];

for (let i = 0; i < numbers.length; i++) {
  // Add an event listener to all divs/button
  numbers[i].addEventListener("click", (e) => {
    if (numbers[i].innerHTML != "C" && numbers[i].innerHTML != ".") {
      arrayOfNumbers.push(numbers[i].innerHTML);
      operandFlag = false;
      console.log(arrayOfNumbers);
      console.log(operandFlag);
      input.innerHTML += e.target.innerHTML;
    }

    if (e.target.innerHTML == "C") {
      console.log(e.target.innerHTML);
      decimalFlag = false;
      operandFlag = false;
      input.innerHTML = "";
      arrayOfNumbers = [];
      arrayOfOperations = [];
      numbersToCalculate = [];
      console.log("Array of Operations", arrayOfOperations);
      console.log("Array of Operations", arrayOfOperations);
    }

    if (!decimalFlag && e.target.innerHTML == ".") {
      input.innerHTML += e.target.innerHTML;
      decimalFlag = true;
      console.log("Decimal?", decimalFlag);
      arrayOfNumbers.push(e.target.innerHTML);
    } else if (decimalFlag) {
      console.log("Decimal pressed again");
      console.log("decimal flag?", decimalFlag);
    }
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", (e) => {
    // operandFlag = true;
    if (operandFlag == false && input.innerHTML != "") {
      if (e.target.innerHTML == "+") {
        decimalFlag = false;
        combineArrayNumbers();
        arrayOfOperations.push(operations[i].innerHTML);
        operandFlag = true;
        console.log("Array of Operations", arrayOfOperations); //same thing as console.log("Array of Operations", arrayOfOperations)
        console.log("Operations?", operandFlag);
        addOp();
      }
    }
  });
}

equal.addEventListener("click", (e) => {
  combineArrayNumbers();
});

function addOp() {
  console.log("Num1: ", numbersToCalculate[0], "Num2: ", numbersToCalculate[1]);
  var sum = numbersToCalculate[0] + numbersToCalculate[1];
  console.log(sum);
  input.innerHTML = sum;
}

function combineArrayNumbers() {
  // get the numbers array;
  // slice array and then combine
  numbersToCalculate.push(Number(arrayOfNumbers.join("")));
  input.innerHTML = "";
  arrayOfNumbers = [];
  console.log("Concat string: ", numbersToCalculate);
}
