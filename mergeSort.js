function mergeSort(array){
  if(array.length === 1){
    return array;
  }
  var middle = Math.floor(array.length / 2);
  var left = array.indexOf(0, middle);
  var right = array.slice(middle, array.length - 1);
  array = merge(mergeSort(left), mergeSort(right));
  return array;
}


function merge(left, right){
  var result = [];
  leftArray = 0;
  rightArray = 0;
  while(leftArray < left.length && rightArray < right.length){
    if(left[leftArray] < right[rightArray]){
      result.push(left[leftArray]);
      leftArray++;
    } else {
      result.push(right[rightArray]);
      rightArray++
    }
  }
  return result.concat(left.slice(leftArray)).concat(right.slice(rightArray));
}