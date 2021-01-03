'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathCosh() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ cosh: polyfill },
		{ cosh: function () { return Math.cosh !== polyfill; } }
	);
	return polyfill;
};
