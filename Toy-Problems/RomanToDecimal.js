var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToDecimal = (romanNumeral) => {
    let storage = [];
    let array = Object.values(DIGIT_VALUES);
      for(var i = 0; i < array.length; i++){
        if(array.indexOf(array[i]) < array.indexOf(array[i + 1])){
            array[i + 1] - array[i];
        } else {
            array[i + 1] + array[i];
        }
     }  
    return romanNumeral;
}

console.log(romanToDecimal(IX));
console.log(romanToDecimal(XI));