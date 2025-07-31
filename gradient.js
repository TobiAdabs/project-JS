//@ts-check
/**
 * @param {number} y1
 * @param {number} x1
 * @param {number} x2
 * @param {number} y2
 */

function findGradient1(y1, x1, x2, y2) {
    return (y2 -y1) / (x2 -x1)
};

document.write("The gradient of this is" + " " + findGradient1(8, 3, 9, 14));