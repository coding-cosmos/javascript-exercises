const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
return	arr.reduce((sum,item)=>{
    return sum + item;
  },0);
};

const multiply = function(...args) {
  let result = 1;
  for(let arg of args){
    result *= arg;
  }
  return result;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(n) {
  let fac = 1;
	for (let i = n; i > 0; i--) {
    fac *= i
  }
  return fac;
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
