var getWrapDetails = require("./_getWrapDetails"),
  insertWrapDetails = require("./_insertWrapDetails"),
  setToString = require("./_setToString"),
  updateWrapDetails = require("./_updateWrapDetails");

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + "";
  // 给指定wrapper设置内容，如果已有则更新
  return setToString(
    wrapper,
    insertWrapDetails(
      source,
      updateWrapDetails(getWrapDetails(source), bitmask)
    )
  );
}

module.exports = setWrapToString;
