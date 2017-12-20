// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max=0;
  let arr ={}
  let maxChar = ''
  for(let i=0;i<=str.length-1;i++){
      if(arr[str[i]]){
        arr[str[i]]++
      }else {
        arr[str[i]] =1
      }
  } 

  for(let val in arr){
    if(arr[val] > max){
      max = arr[val]
      maxChar = val;
    }
  }
  return maxChar
}

module.exports = maxChar;
