const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    
    let returningString = "";
    for (let i=1; i<=num; i++) {
        returningString += string;
    }
    return returningString;
};

// Do not edit below this line
module.exports = repeatString;
