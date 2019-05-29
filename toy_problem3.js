function sqNumbers(numArray){
    //create an array
    //map the created array
    //sort the created array
    var sqrArray = numArray.map(function(num){
      return Math.pow(num, 2);
    }).sort(function(a,b){
      return a - b;
    });
    //return the created array
    return sqrArray;
  }
  
  var arrOfNum = [-4,-1,0,3,10];
  var arrOfNum2 = [-7,-3,2,3,11];
  
  console.log(sqNumbers(arrOfNum));
  console.log(sqNumbers(arrOfNum2));