const fibonacci = function(n) {
    if (typeof n === 'string'){
        n = Number(n);
    }

    if (n<0){
        return "OOPS"
    }
    fib = {
        1: 1,
        2: 1
    }

    if (n>3){
        for (let i=3; i<=n;i++){
            fib[i] = fib[i-1] + fib[i-2]
        }
    }


    return fib[n]
};

// Do not edit below this line
module.exports = fibonacci;
