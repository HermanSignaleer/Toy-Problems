const myProductOfThree =(arrayOfIntergers) => {
  for (let i = 0; i < arrayOfIntergers.length; i++){
    if(arrayOfIntergers[i] > arrayOfIntergers[i+1]){
     arrayOfIntergers.slice(arrayOfIntergers[i], arrayOfIntergers[i+1]);
    }
   arrayOfIntergers.reduce((product, current) => {
     return product * current;
   }, 1);
  }
  return arrayOfIntergers;
};

var myTestArray = [2, 1, 3, 7];

console.log(myProductOfThree(myTestArray));