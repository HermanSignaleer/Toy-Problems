// inputs: string 
// outputs: array of starting and ending index of longest run

function longestRun(string) {
  // your code here!
  var storage = [];
  //loop through string to check each character
  for(var i = 0; i < string.length; i++){
    //check how many times each character appears
    if(string.valueOf(string[i] < 1)){
     storage.push(string.indexOf(string[i]));
     storage.push(string.lastIndexOf(string[i]));
    }
  }
  return storage;
};

console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);