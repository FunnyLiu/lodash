var createMathOperation = require('./_createMathOperation');

/**
 * Divide two numbers.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * _.divide(6, 4);
 * // => 1.5
 */
// 调用_createMathOperation，回调为简单的/运算。
var divide = createMathOperation(function(dividend, divisor) {
  return dividend / divisor;
}, 1);

module.exports = divide;
