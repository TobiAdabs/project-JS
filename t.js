let firstNum = parseInt(prompt("First Number"))
let operator = prompt("Operator")
let secondNum = parseInt(prompt("Second Number"))
if (operator == "+") {
  console.log(firstNum + secondNum)
}
else if (operator == "*") {
  console.log(firstNum * secondNum)
}
else if (operator == "-") {
  console.log(firstNum - secondNum)
}
else if (operator == "/") {
  console.log(firstNum / secondNum)
}
else if (operator == "%") {
  console.log(firstNum % secondNum)
}
else {
  alert("This is not an operator")
};