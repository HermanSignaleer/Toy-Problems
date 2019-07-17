function count(string){
  var alphabet ='abcdefghijklmnopqrstuvwxyz';
  var splitString = alphabet.split('');
  var count = 0;
  for(var i = 0; i < splitString.length; i++){
    var element = alphabet[i];
    //var positionOfLetter = splitString.indexOf(string[i] + 1);
    if(string.charAt(string[i]) === splitString.indexOf(alphabet[i])){
      var positionOfLetter = splitString.indexOf(string[i] + 1);
       count += positionOfLetter*-1;
    }
    count++;
  }
  //if(string[i] === splitString[i] && typeof(element) !== undefined){
    //count += positionOfLetter*-1;
    return count;
  //}
  //return count;
}
var string = 'church'
console.log(count(string));

function countedLetter(string){
  var alphabet = 'abcdefghijjklmnopqrstuvwxyz';
  var alphaArray = alphabet.split('');
  for (var i = 0; i < alphaArray.length; i++){
    var sum = alphaArray[i] + 1;
  }
  var countedLetters = alphaArray.map(function(element){
    return element;
  }).reduce(function(sum, cur){
      return alphaArray[i] + cur;
  });
  if (typeof element !== 'undefined'){
     countedLetters += string[i] +1;
  }
}
console.log(countedLetters)