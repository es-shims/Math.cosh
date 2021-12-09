import cosh, * as coshModule from 'math.cosh';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(cosh, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(coshModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = coshModule;
	t.equal((await import('math.cosh/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('math.cosh/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('math.cosh/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
