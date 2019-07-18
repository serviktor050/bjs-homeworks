let arr1;
let arr2;

//1. compareArrays
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}

compareArrays([2, 5, 6], [2, 5, 6])

//2. memoize 