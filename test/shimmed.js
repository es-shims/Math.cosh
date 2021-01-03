'use strict';

require('../shim')();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.cosh.length, 1, 'Math.cosh has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.cosh.name, 'cosh', 'Math.cosh has name "cosh"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'cosh'), 'Math.cosh is not enumerable');
		et.end();
	});

	runTests(Math.cosh, t);

	t.end();
});
