const repeatString = function(str, number) {
    if (number < 0){
        return "ERROR";
    }

    final = "";
    while (number >0){
        final += str;
        number--;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
