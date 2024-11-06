const removeFromArray = function(array, ...element) {
    // array = array.filter(item => !(element.includes(item)));
    // return array;

    const newArray = [];
    array.forEach((item) => {
        if (!element.includes(item)) newArray.push(item);
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
