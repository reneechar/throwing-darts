const dartScore = require('../throwing-darts');
const Chai = require('chai');
const expect = Chai.expect;

let regular = [5,2,4,10];
let scoreReg = 30;
let short = [2,6,5];
let scoreShort = 20;
let zeroGame = [26,32,11,11];
let perfect = [0,1,2];
let scorePerfect = 130;
let emptyArr = [];
let invalidArr = [123,1,'5'];


describe('dartScore calculator', () => {

	it('should be a function', () => {
		expect(dartScore).to.be.a('function');
	});
	it('should return a score based on an array of numbers passed in', () => {
		expect(dartScore(regular)).to.equal(scoreReg);
		expect(dartScore(short)).to.equal(scoreShort);
		expect(dartScore(zeroGame)).to.equal(0);
		expect(dartScore(perfect)).to.equal(scorePerfect);
		expect(dartScore(emptyArr)).to.equal(0);
	});
	it('should throw errors for non valid arguments that are passed in', () => {
		expect(dartScore.bind(this,invalidArr)).to.throw(Error);
	})

})