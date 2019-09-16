/** Detect free variable `global` from Node.js. */
// 兼容node的global
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
