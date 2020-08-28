const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

const uStorage = function () {
	const _data = {};

	return {
		setItem (param1, param2) {
			_data[param1] = param2;
		},
		getItem (inputData) {
			return _data[inputData] || null;
		},
		_FakeData () {
			return _data;
		},
	};
};

describe('OLKSLocalStorageSet', function OLKSLocalStorageSet() {

	it('throws error if param1 not localStorage', function() {
		throws(function() {
			mod.OLKSLocalStorageSet({}, 'alfa', 'bravo');
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param2 not string', function() {
		throws(function() {
			mod.OLKSLocalStorageSet(uStorage(), null, 'bravo');
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param2 not filled', function() {
		throws(function() {
			mod.OLKSLocalStorageSet(uStorage(), ' ', 'bravo');
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param3 undefined', function() {
		throws(function() {
			mod.OLKSLocalStorageSet(uStorage(), 'alfa', undefined);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns param3', function () {
		deepEqual(mod.OLKSLocalStorageSet(uStorage(), 'alfa', 'bravo'), 'bravo');
	});

	it('calls setItem', function () {
		const item = uStorage();

		mod.OLKSLocalStorageSet(item, 'alfa', 'bravo');

		deepEqual(item._FakeData()['alfa'], 'bravo');
	});

});

describe('OLKSLocalStorageGet', function OLKSLocalStorageGet() {

	it('throws error if param1 not localStorage', function() {
		throws(function() {
			mod.OLKSLocalStorageGet({}, 'alfa');
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param2 not string', function() {
		throws(function() {
			mod.OLKSLocalStorageGet(uStorage(), null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws error if param2 not filled', function() {
		throws(function() {
			mod.OLKSLocalStorageGet(uStorage(), ' ');
		}, /OLSKErrorInputNotValid/);
	});

	it('returns getItem', function () {
		const item = uStorage();

		deepEqual(mod.OLKSLocalStorageGet(item, 'alfa'), null);
		
		mod.OLKSLocalStorageSet(item, 'alfa', 'bravo');

		deepEqual(mod.OLKSLocalStorageGet(item, 'alfa'), 'bravo');
	});

});
