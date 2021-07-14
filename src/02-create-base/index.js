// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain: No matter what we provide as input to the algorithm,
// it should still run in the same amount of time - O(1)

module.exports = function createBase(integer) {
    function addTen (integer) {
        integer += 10;
        return integer;
    }

    function subtractTwenty(integer) {
        integer -= 20;
        return integer;
    }

    if (integer >= 0) {
        return addTen;
    } else if (integer < 0) {
        return subtractTwenty;
    }
};