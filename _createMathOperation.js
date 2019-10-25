var baseToNumber = require('./_baseToNumber'),
    baseToString = require('./_baseToString');

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */
function createMathOperation(operator, defaultValue) {
  return function(value, other) {
    var result;
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined) {
      result = value;
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other;
      }
      // 如果数学运算参数只要有字符串类型，则都转成字符串
      if (typeof value == 'string' || typeof other == 'string') {
        value = baseToString(value);
        other = baseToString(other);
      } else {
        // 否则有数字类型就都转为数字来处理
        value = baseToNumber(value);
        other = baseToNumber(other);
      }
      // 执行传入的回调处理函数
      result = operator(value, other);
    }
    return result;
  };
}

module.exports = createMathOperation;
