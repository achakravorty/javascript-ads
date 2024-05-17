// Telephone Number Validator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
    //simple no spaces
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/

    return regex.test(str);
}

console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("(555)555-5555"))
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("27576227382"));


/*
Explanation

    regex = ^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$

    ^ asserts the position at the start of the string.
    (1\s?)? optionally matches a '1' followed by an optional space.
    (\(\d{3}\)|\d{3}) matches either three digits enclosed in parentheses (555) or just three digits 555.
    ([\s-]?) optionally matches a space or a hyphen.
    \d{3} matches exactly three digits.
    ([\s-]?) optionally matches a space or a hyphen.
    \d{4} matches exactly four digits.
    $ asserts the position at the end of the string.
*/