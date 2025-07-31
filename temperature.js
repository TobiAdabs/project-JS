// Only use F (For Farenheit) and C (For Celsius) in the second argument column

function convertTemperature(num, temp) {
  if (temp == "F") {
    convert = (num - 32) * (5 / 9)
    return convert
  }
  else if(temp == "C") {
    convert = num * (9 / 5) - 32
    return convert
  }
}
console.log(convertTemperature(32, "F"))