const removeFromArray = function(arr, ...args) {
    // Your code here
    temp  = arr;
    for (let i=0; i<args.length; i++){
        temp = temp.filter((item)=>item!==args[i]) //should only remove same type as well, check last test in the other file
    }
    return temp
};

// Do not edit below this line
module.exports = removeFromArray;
