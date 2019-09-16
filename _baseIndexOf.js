var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    //普通情况，遍历通过===判断索引
    ? strictIndexOf(array, value, fromIndex)
    //如果value是NaN，使用baseIsNaN作为自定义查询函数来baseFindIndex查找
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;
