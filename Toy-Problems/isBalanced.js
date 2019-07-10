function isBalanced (str) {
  for(var i = 0; i < str.length; i++){
    if(str.charAt(str[i]) !== '(' && str.charAt(str[i]) !== ')'){
      return false;
    } else {
      return true;
    }
    if(str.charAt(str[i]) !== '{' && str.charAt(str[i]) !== '}'){
      return false;
    } else {
      return true;
    }
    if(str.charAt(str[i]) !== '[' && str.charAt(str[i]) !== ']'){
      return false;
    } else {
      return true;
    }
    if(str.charAt(str[i]) === '(' && str.charAt(str[i]) === ')'){
        return true;
    }
    if(str.charAt(str[i]) === '{' && str.charAt(str[i]) === '}'){
        return true;
    }
    if(str.charAt(str[i] === '[' && str.charAt(str[i]) === ']')){
      return true;
    }
  }
};

console.log(`Test1: expected false and got ${isBalanced(')(')}`);
console.log(`Test2: expected false and got ${isBalanced('()(()()()())((()(()()))')}`);
console.log(`Test3: expected true and got ${isBalanced('[[[{{{((()))}}}]]]')}`);
console.log(`Test4: expected true and got ${isBalanced('(((10 ) ()) ((?)(:)))')}`);
console.log(`Test5: expected true and got ${isBalanced('(x + y) - (4)')}`);
console.log(`Test6: expected false and got ${isBalanced('({)}')}`);
console.log(`Test7: expected false and got ${isBalanced('[]]')}`);
console.log(`Test8: expected false and got ${isBalanced('(50)(')}`);
console.log(`Test9: expected true and got ${isBalanced('{}')}`);
console.log(`Test10: expected false and got ${isBalanced('{')}`);
console.log(`Test11: expected false and got ${isBalanced('[]}{()')}`);
console.log(`Test12: expected false and got ${isBalanced(')))()(((')}`);
console.log(`Test13: expected false and got ${isBalanced('}')}`);
console.log(`Test14: expected true and got ${isBalanced('[{()}]')}`);
console.log(`Test15: expected false and got ${isBalanced('[{]}')}`);
console.log(`Test16: expected true and got ${isBalanced('[{}]')}`);