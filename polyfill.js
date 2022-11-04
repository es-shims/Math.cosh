'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var original = Math.cosh;
	if (!original
		// Chrome < 40 cosh returns ∞ for large numbers
		|| original(710) === Infinity // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}

	return original;
};
