var exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
	var _, temp;
	_ = require("lodash");
	temp = "";
	args = Array.prototype.slice.call(arguments);
	_.each((args), function(val, index) {
		if ((temp === "") && (val.indexOf("waldo") > -1)) {
		temp = index; return (temp);
		}
	});
	return args[temp];
};

// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()
exercises.largestNums = function(arrayOfNumberArrays) {
	var _, args, maxArray;
	_ = require("lodash");
	args = Array.prototype.slice.call(arrayOfNumberArrays);
	maxArray =  _.chain(args)
			.map (function(nums) { return _.max(nums);})
			.value();
	return maxArray;
};

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
	var answer, _;
	_ = require("lodash");
	answer = _.filter(dates, function(date) {
		return ((date >= lowerBound) && (date <= upperBound));});
	return answer;
  // TODO: implement me
};

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()
// takes an array of numbers and returns the sum of the array
exercises.TODO = function(array) {
	var _ = require("lodash");
	return _.reduce(array, function(sum, val) {
               return sum + val;
}, 0);
};

module.exports = exercises;
