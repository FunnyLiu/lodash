/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
// 获得函数源码
function toSource(func) {
  if (func != null) {
    try {
      //调用函数的toString
      return funcToString.call(func);
    } catch (e) {}
    try {
      //失败则调用字符串拼接方法
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;
