const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) return "ERROR";
    if (isNaN(num1) || isNaN(num2)) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let finalSum = 0;
    // let biggerNumber = num1 > num2 ? num1 : num2;
    // let smallerNumber = num2 < num1 ? num2 : num1;
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // OR if (min > max) [min, max] = [max, min];

    for (let i = num1; i<= num2; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
