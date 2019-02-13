"use strict";
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => arr.filter(el => Number.isInteger(el) && el > 0).map(val => val * val);
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

