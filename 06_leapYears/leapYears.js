const leapYears = function(year) {
    // divisible by 4, % 4 = 0
    // not divisible by 100, % 100 = 0
    // unless divisible by 400, % 400 = 0

    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 == 0) return true;
        else if (year % 100 == 0) return false;
        else return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
