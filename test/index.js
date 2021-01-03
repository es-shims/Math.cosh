'use strict';

var cosh = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(cosh, t);

	t.end();
});
