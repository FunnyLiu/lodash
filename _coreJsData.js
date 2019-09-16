var root = require('./_root');

/** Used to detect overreaching core-js shims. */
//用来获取root.__core-js_shared__
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;
