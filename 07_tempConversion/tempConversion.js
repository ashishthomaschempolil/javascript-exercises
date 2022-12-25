const convertToCelsius = function(temp) {
  result = Math.round(((temp - 32)*5/9)*10)/10
  return result
};

const convertToFahrenheit = function(temp) {
  result = Math.round((1.8*temp + 32)*10)/10 //rounding to 1 decimal place
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
