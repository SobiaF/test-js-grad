/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain: The calculation time increases at the same pace as the input - O(n)

'use strict';

module.exports = function sortArray(arr) {
    if (!(arr instanceof Array)) {
        new TypeError('This function requires an array of integers');
    }

    arr.every(function (e) {
        if (typeof e != 'number') {
            throw new TypeError('This function requires an array of integers');
        }
    });

    return arr.sort((a, b) => a - b);
};