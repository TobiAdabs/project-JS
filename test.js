//@ts-check
/**
 * @param {number} x
 */
function p(x) {
    return (Math.pow(x, 2)) - (3*x)
};

/**
 * @param {number} x
 */
function q(x) {
    console.log(p(x) - 4)
};

q(10);