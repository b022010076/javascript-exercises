const fibonacci = function(sequence) {
    if (typeof sequence !== 'number') {
        sequence = parseInt(sequence);
    }

    if (sequence < 0) return "OOPS";
    if (sequence == 0) return 0;
    
    if (sequence == 1) {
        return sequence;
    } else return fibonacci(sequence - 1) + fibonacci(sequence - 2);
};

// Do not edit below this line
module.exports = fibonacci;
