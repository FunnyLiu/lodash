var metaMap = require('./_metaMap'),
    noop = require('./noop');

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
//如果支持weakMap，则去指定func
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;
