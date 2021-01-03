'use strict';

var isNaN = require('is-nan');

var $isFinite = isFinite;
var $Number = Number;
var E = Math.E;
var exp = Math.exp;
var abs = Math.abs;

module.exports = function cosh(value) {
	var x = $Number(value);
	if (x === 0) { // +0 or -0
		return 1;
	}
	if (isNaN(x)) {
		return NaN;
	}
	if (!$isFinite(x)) {
		return Infinity;
	}

	var t = exp(abs(x) - 1);
	return (t + (1 / (t * E * E))) * (E / 2);
};
