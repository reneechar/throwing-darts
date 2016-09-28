function scoreThrows(arr) {
	if (arr.length < 1) {
		return 0;
	}
	arr.some(dart => {
		if (typeof dart !== 'number') {
			throw new Error('Please only enter an array with numbers');
		}
	});
	
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