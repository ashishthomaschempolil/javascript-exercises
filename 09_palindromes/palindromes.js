const palindromes = function (a) {
    a = a.toLowerCase().replace(/[^a-z]/g, ""); // remove all non-alphabetic characters
    let b = ''
    for (let i=a.length-1; i>=0; i--){
        b+=a[i]
    }
    return a==b;
};

// Do not edit below this line
module.exports = palindromes;
