const findTheOldest = function(array) {
    const currentTime = new Date();
    return array.reduce((previous, current) => (previous.yearOfDeath ?? currentTime.getFullYear()) - previous.yearOfBirth > (current.yearOfDeath ?? currentTime.getFullYear()) - current.yearOfBirth ? previous : current);
};

// Do not edit below this line
module.exports = findTheOldest;
