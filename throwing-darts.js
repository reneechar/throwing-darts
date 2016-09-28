function scoreThrows(arr) {
	let invalid = arr.filter (dart => {
		return typeof dart !== 'number';
	});

	if(invalid.length > 0) {
		throw new Error('Please only enter an array with numbers');
	}
	if (arr.length < 1) {
		return 0;
	}

	let dartsObj = arr.reduce((newObj,dart) => {
		if(dart <= 10 && dart >= 5) {
			newObj.score += 5;
			newObj.perfect = false;
			return newObj;
		} else if (dart < 5) {
			newObj.score += 10;
			return newObj;
		} else {
			newObj.perfect = false;
			return newObj;
		}
	},{score: 0, perfect: true});

	if (dartsObj.perfect) {
		return dartsObj.score + 100;
	} else {
		return dartsObj.score;
	}
}


module.exports = scoreThrows;