'use strict';

var almostEqual = function (actual, expected, precision) {
	var prec = precision || 1e-11;
	return actual - expected < prec && expected - actual < prec;
};

module.exports = function (cosh, t) {
	t.test('should be correct for NaN', function (st) {
		st.equal(cosh(NaN), NaN, 'cosh(NaN)');
		st.end();
	});

	t.test('should be correct for Infinities', function (st) {
		st.equal(cosh(Infinity), Infinity, 'cosh(Infinity)');
		st.equal(cosh(-Infinity), Infinity, 'cosh(-Infinity)');
		st.end();
	});

	t.test('should be correct for zeroes', function (st) {
		st.equal(cosh(-0), 1, 'cosh(-0)');
		st.equal(cosh(+0), 1, 'cosh(+0)');
		st.end();
	});

	t.test('should be correct', function (st) {
		/*
		 * Overridden precision values here are for Chrome, as of v25.0.1364.172
		 * Broadened slightly for Firefox 31
		 */
		st.ok(almostEqual(cosh(12), 81377.39571257407, 9e-11), 'cosh(12)');
		st.ok(almostEqual(cosh(22), 1792456423.065796, 1e-5), 'cosh(22)');
		st.ok(almostEqual(cosh(-10), 11013.232920103323), 'cosh(-10)');
		st.ok(almostEqual(cosh(-23), 4872401723.124452, 1e-5), 'cosh(-23)');
		st.equal(cosh(-2e-17), 1, 'cosh(-2e-17)');
		st.end();
	});

	t.test('is correct for extreme non-infinities', function (st) {
		st.notEqual(cosh(710), Infinity, 'cosh(710)');
		st.ok(almostEqual(cosh(710) / 1e+308, 1.1169973830808557), 'cosh(710) / 1e+308');
		st.end();
	});
};
