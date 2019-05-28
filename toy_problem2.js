function charCount(string){
    var alphabet = {a:0, b:2, c:3, d:4, e:0, f:6, g:7, h:8, i:0, j:10, k:11, l:12, m:13, n:14, o:0, p:16, q:17, r:18,s:19, t:20, u:0, v:22, w:23, x:24, y:25, z:26};
    var alphaArray = Object.values(alphabet);
    var Array = string.split('');
    var myArray = [];
    for(var i = 0; i < string.length; i++){
      for(var key in alphabet){}
         if (string.charAt() === Object.keys(alphabet)){
             myArray += alphaArray;
         }
         }
  return myArray.reduce(function (sum, cur){
    return sum + cur;
  }, 0);
  }