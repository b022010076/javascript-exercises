const palindromes = function (string) {
    // const filteredString = string.replace(/[^A-Za-z]/g, '').split("");

    // return filteredString.join("").toLowerCase() == filteredString.reverse().join("").toLowerCase();
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");

    const reversedString = cleanedString.split("").reverse().join("");

    console.log(reversedString, cleanedString)
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
