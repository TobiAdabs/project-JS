function Triangle(height) {
    for(let i = 0; i < height; i++){
        let row = ' ';
        for(let j = 0; j < i; j++){
            row += '  ';
        }
        for(let k = 0; k < height; k++) {
            row += '* '
        }
        console.log(row)
    }
}

Triangle(5);