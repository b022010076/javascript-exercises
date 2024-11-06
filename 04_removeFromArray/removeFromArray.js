const removeFromArray = function(array, ...element) {
    array = array.filter(item => !(element.includes(item)));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
