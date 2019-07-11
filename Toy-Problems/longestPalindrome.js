function longestPalindrome (string) {
  // your code here!
  for(let i = 0; string.length; i++){
    if(string.length !== ''){
      let palindrome = string.split('').reverse().join('')
      return palindrome;
    }
    if(string.length === ''){
      for(let j = 0; j < arrayOfStrings.length; j++){
        let arrayOfStrings = string.split(' ');
        let normal = arrayOfStrings[j];
        let reversed = arrayOfStrings[j].reverse();
        if(reversed === normal){
            return normal;
        }
      }
    }
  }
};



console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
console.log(`Test4: expected "tattarrattat" and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);
