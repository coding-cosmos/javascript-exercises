const sumAll = function(numOne,numTwo) {
    
    if (numOne<0 || numTwo<0||isNaN(numOne)||isNaN(numTwo)||typeof(numOne)==="string"||typeof(numTwo)==="string") {
        return "ERROR";
    }
   let min = Math.min(numOne,numTwo);
   let max = Math.max(numOne,numTwo);
   let sum = 0;
   for (let num = min ; num <= max; num++) {
       sum+=num;
   }
   return sum;
}
sumAll(1,"5");
// Do not edit below this line
module.exports = sumAll;
