const sumAll = function(a, b) {
    if (a<0 || b<0 || typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR"
    }
    let final = 0,
    i = Math.min(a,b);
    while(i<=Math.max(a,b)){
        final+=i
        i++
    }
    return final
};

// Do not edit below this line
module.exports = sumAll;
