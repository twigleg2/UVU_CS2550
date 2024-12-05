/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // Roman numeral mappings for each magnitude
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM"];

    // Break the number into its magnitude parts
    const partThousands = Math.floor(num / 1000);
    const partHundreds = Math.floor((num % 1000) / 100);
    const partTens = Math.floor((num % 100) / 10);
    const partOnes = num % 10;

    // Construct the Roman numeral from each magnitude part
    const romanNumeral =
        thousands[partThousands] +
        hundreds[partHundreds] +
        tens[partTens] +
        ones[partOnes];

    return romanNumeral;
};



