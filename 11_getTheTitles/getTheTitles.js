const getTheTitles = function(array) {
    // const result = [];
    // array.forEach((book) => {
    //     result.push(book['title']);
    // })
    // return result;

    return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
