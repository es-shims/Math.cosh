'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = Math.cosh;
	if (!native
		// Chrome < 40 cosh returns ∞ for large numbers
		|| native(710) === Infinity // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}

	return native;
};
