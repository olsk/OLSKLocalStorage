const mod = {

	OLKSLocalStorageSet (param1, param2, param3) {
		if (typeof param1 !== 'object' || param1 === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param1.setItem !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'string' || !param2.trim()) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param3 === 'undefined') {
			throw new Error('OLSKErrorInputNotValid');
		}

		param1.setItem(param2, param3);

		return param3;
	},

	OLKSLocalStorageGet (param1, param2) {
		if (typeof param1 !== 'object' || param1 === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param1.setItem !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof param2 !== 'string' || !param2.trim()) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return param1.getItem(param2);
	},

};

Object.assign(exports, mod);
