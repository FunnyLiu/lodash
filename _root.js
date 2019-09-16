var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
// 建立引用到freeGlobal
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;
