/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let strLength = s.length;
    return Array.from(s)
        .map((char) =>
            values[char]
        )
        .reduce((total, n, i, arr) => {
            if (i == strLength - 1) {
                return total + n;
            }

            let next = arr[i + 1];
            if (n < next) {
                return total - n;
            }
            else {
                return total + n;
            }
        }
            , 0)
};