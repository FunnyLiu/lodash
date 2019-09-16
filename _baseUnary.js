/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
//对一个函数进行闭包处理
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;
