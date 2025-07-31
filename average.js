function findAverage(...num) {
    let elements = num.filter(element => num.includes(element));
    return num.forEach(element =>{
        element + elements;
    });
}
console.log(findAverage([1, 2, 3]))