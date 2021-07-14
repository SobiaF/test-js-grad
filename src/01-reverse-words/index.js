/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain: No matter what we provide as input to the algorithm,
// it should still run in the same amount of time - O(1)

module.exports = function reverseWordsInSentence(input) {
    return input.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
};
