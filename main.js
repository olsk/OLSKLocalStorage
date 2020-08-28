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

		param1.setItem(param2, param3);

		return param3;
	},

};

Object.assign(exports, mod);
