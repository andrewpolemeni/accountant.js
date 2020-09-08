# Accountant.js
Accountant.js is a vanilla javascript open source project.<br />
It contains simple functions to calculate functions related to finance.<br />

# Current Methods
Each method has an optional paremeter for floating point numbers. <br />The default will output to two decimal places.

accountant.calculateCompoundInterestTotalAmount(10, 5, 20, 1);<br />
accountant.calculateCompoundInterest(10, 5, 20, 1);<br />
accountant.getPresentValue(10000, 5, 20);<br />
accountant.getFutureValue(10000, 5, 20);<br />
accountant.getPresentValueOfAnnuity(); // Working on method<br />
accountant.getFutureValueOfAnnuity(10000, 5, 20);<br />
