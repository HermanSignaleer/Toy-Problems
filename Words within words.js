const wordsWithinWords = (arrayOfWords) => {
    // loop through array
    for(let i = 0; i < arrayOfWords.length; i++){
        //loop through words at index
        for(let j = 0; j < arrayOfWords[i].length; j++){
            let word = [];
            if (arrayOfWords[i] === charAt(arrayOfWords[i][j])){
                word.push(arrayOfWord[i]);
            }
            return word.split('');
        }
    }
}