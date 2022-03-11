/*
https://digitalcrafts.instructure.com/courses/190/pages/group-in-class-activity-calculator?module_item_id=27454
*/

let numbers = document.querySelectorAll(".numbers div");
// console.log(numbers);
let operations = document.querySelectorAll(".operators div");
// console.log(operations);
let input = document.getElementById("input");
console.log(input);

let decimalFlag = false;

for (let i = 0; i < numbers.length; i++) {
  // Add an event listener to all divs/button
  numbers[i].addEventListener("click", (e) => {
    if (e.target.innerHTML == "C") {
      // console.log(e.target.innerHTML);
      decimalFlag = false;
      input.innerHTML = "";
    } else {
      if (!decimalFlag && e.target.innerHTML != ".") {
        input.innerHTML += e.target.innerHTML;
      } else if (!decimalFlag) {
        decimalFlag = true;
        input.innerHTML += e.target.innerHTML;
      }
    }
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", (e) => {
    console.log(e);
  });
}

console.log(numbers);
