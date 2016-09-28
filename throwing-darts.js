function scoreThrows(arr) {
	let invalid = arr.filter (dart => {
		return typeof dart !== 'number';
	});

	if(invalid.length > 0) {
		throw new Error('Please only enter an array with numbers');
	}

	let zeroPoints = arr.filter(dart => {
		return dart > 10;
	});
	let fivePoints = arr.filter (dart => {
		return (dart >= 5 && dart <=10);
	});
	let tenPoints = arr.filter(dart => {
		return dart < 5;
	});

	
	if(fivePoints.length === 0 && zeroPoints.length === 0 && tenPoints.length > 0){
		return 10*tenPoints.length+100;
	} else {
		return 5*fivePoints.length + 10*tenPoints.length;
	}

}


module.exports = scoreThrows;