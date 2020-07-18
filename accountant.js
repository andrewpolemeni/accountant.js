/*
@ Author: Andrew Polemeni
@ Licence: M.I.T
@ Version: 1.0.0
*/

"use strict";

let accountant = {
	calculateCompoundInterestTotalAmount: function calculateCompoundInterestTotalAmount(amount, rate, numberOfYears, compoundingTimesPerYear, decimalPlaces = 2) {
		var total = (amount * Math.pow((1 + (rate / (compoundingTimesPerYear * 100))), (compoundingTimesPerYear * numberOfYears)));
		return total.toFixed(decimalPlaces);
	},
	calculateCompoundInterest: function calculateCompoundInterest(amount, rate, numberOfYears, compoundingTimesPerYear, decimalPlaces = 2) {
		var total = (amount * Math.pow((1 + (rate / (compoundingTimesPerYear * 100))), (compoundingTimesPerYear * numberOfYears)));
		return (total - amount).toFixed(decimalPlaces);
	},
	getPresentValue: function calculatePresentValue(futureValue, interestRate, numberOfYears, decimalPlaces = 2) {
		for (var i = 0; i < numberOfYears; i++) {
			futureValue /= (1 + (interestRate / 100));
		}
		let presentValue = futureValue;
		return presentValue.toFixed(decimalPlaces);
	},
	getFutureValue: function calculateFutureValue(presentValue, interestRate, numberOfYears, decimalPlaces = 2) {
		var baseNumber = (1 + interestRate / 100);
		var futureValue = presentValue * (Math.pow(baseNumber, numberOfYears));
		return futureValue.toFixed(decimalPlaces);
	},
	getPresentValueOfAnnuity: function calculatePresentValueOFAnnuity() {

	},
	getFutureValueOfAnnuity: function calculateFutureValueOFAnnuity() {

	},
};


let a = accountant.calculateCompoundInterestTotalAmount(10, 5, 20, 1);
let b = accountant.calculateCompoundInterest(10, 5, 20, 1);
let c = accountant.getPresentValue(10000, 5, 20);
let d = accountant.getFutureValue(10000, 5, 20);
let e = accountant.getPresentValueOfAnnuity();
let f = accountant.getFutureValueOfAnnuity();
console.log(a, b, c, d); // output result of method to console.
