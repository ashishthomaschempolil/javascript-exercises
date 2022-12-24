const reverseString = function(str) {
    final = "";

    let i = str.length-1;

    while (i>=0){
        final+=str[i]
        i--;
    }
    return final
};

// Do not edit below this line
module.exports = reverseString;
