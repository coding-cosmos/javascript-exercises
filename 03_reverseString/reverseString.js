const reverseString = function(string) {
   let words = string.split(" ");
    reverse(words);
   return(join(words));
};

function reverse(words){
    
    for (let wordNo = 0; wordNo < words.length; wordNo++) {
        let reverseWord ="";
        for (let wordLength = words[wordNo].length-1; wordLength>=0; wordLength--) {
            reverseWord += words[wordNo][wordLength];
        }
        words[wordNo] = reverseWord;
    }
    
    return words;
}

function join(array){
   let finalString ="";
    for (let index = array.length-1; index >=0; index--) {
       if (index === 0) {
        finalString += array[index];
       } else {
        finalString += array[index]+" ";
       }
    }
    return finalString;
}
reverseString("Hello there");
// Do not edit below this line
module.exports = reverseString;
