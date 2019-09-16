var eq = require('./eq'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  // 如果迭代器并不是对象则返回
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  // 迭代器索引，如果是数字类型
  if (type == 'number'
        //判断是否类数组类型，如果是则判断index是否可以作为合法索引
        ? (isArrayLike(object) && isIndex(index, object.length))
        //如果index为字符串，则判断其是否为key
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;
