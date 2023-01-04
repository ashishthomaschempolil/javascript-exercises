const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	if (arr === []){
    return 0
  }
  let final = 0
  for (n in arr){ //gets the index only
    final+=arr[n]
  }
  return final
};

const multiply = function(arr) {
  if (arr === []){
    return 0;
  }
  let final = 1;
  for (n in arr){
    final*=arr[n]
  }
  return final
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	if (a == 0){
    return 1;
  }
  pr = 1
  for (let i = a; i>0; i--){
    pr*=i
  }
  return pr
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
