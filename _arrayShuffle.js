var copyArray = require('./_copyArray'),
    shuffleSelf = require('./_shuffleSelf');

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
// 首先拷贝数组，再操作
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;
