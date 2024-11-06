const reverseString = function(string) {
    // let outputString;

    // const stringArray = string.split("");
    // const outputArray = [];

    // for (let i = stringArray.length - 1; i>=0; i--) {
    //     outputArray.push(stringArray[i]);
    // }

    // outputString = outputArray.join("");
    // return outputString;

    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
