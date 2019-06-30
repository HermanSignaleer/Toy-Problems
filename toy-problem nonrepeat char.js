function firstNonRepeatedCharacter(string){
    //loop through string to check characters
    for (var i = 0; i < string.length; i++){
        //create variable that will hold the letter
        var nonRepeatedCharacter = string.charAt(i);
        //return character if there are any non repeated characters
        if(string.indexOf(nonRepeatedCharacter) == i && string.indexOf(nonRepeatedCharacter, i + 1) == -1){
            return nonRepeatedCharacter;
        }
    }
    //return sorry if there are not any non repeated characters
    return 'sorry';
}

console.log(firstNonRepeatedCharacter('ABCDBIRDUP'));
console.log(firstNonRepeatedCharacter('xxxxxxxx'));
console.log(firstNonRepeatedCharacter('ALABAMA'));
console.log(firstNonRepeatedCharacter('BABA'));

