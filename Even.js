let prompt1 = parseInt(prompt("Give me a number"))
let prompt2 = parseInt(prompt("Give me another number"))

const numbers = [prompt1 , prompt2];
let Even = numbers.filter(function (value) {
    return value % 2 == 0;
})

console.log(Even);
