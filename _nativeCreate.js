var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
// 获取原生的Object.create
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;
