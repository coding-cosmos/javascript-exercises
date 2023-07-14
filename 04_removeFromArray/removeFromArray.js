const removeFromArray = function(array,...elements) {
for (const element of elements) {
    let index = array.indexOf(element);
    if(index>=0){
        array.splice(index,1);
    }
    
}
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
