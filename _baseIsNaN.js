/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
//判断是否NaN，通过NaN!==NaN
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;
