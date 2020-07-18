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
	getPresentValueOfAnnuity: function calculatePresentValueOFAnnuity(periodicDepositAmount, interestRate, periodicRateOfInflation = 1, periods, decimalPlaces = 2) {

	},
	getFutureValueOfAnnuity: function calculateFutureValueOFAnnuity(periodicDepositAmount, interestRate, periods, decimalPlaces = 2) {
		var total = 0;
		for (var i = 0; i < periods; i++) {
			total += 1;
			total *= (1 + (interestRate / 100));
		}
		return (total * periodicDepositAmount).toFixed(decimalPlaces)
	}
};

accountant.calculateCompoundInterestTotalAmount(10, 5, 20, 1);
accountant.calculateCompoundInterest(10, 5, 20, 1);
accountant.calculateNumberOfPeriods(1 / 12, 200, -2200, 0);
accountant.getPresentValue(10000, 5, 20);
accountant.getFutureValue(10000, 5, 20);
accountant.getPresentValueOfAnnuity(); // Working on method
accountant.getFutureValueOfAnnuity(10000, 5, 20);
