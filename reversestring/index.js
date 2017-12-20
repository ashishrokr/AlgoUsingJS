// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = ''

  for(i=0;i<=str.length-1;i++){
    debugger
      reversed = str[i] + reversed
  }

  return reversed
}



// function reverse(str) {
//   const strArray = str.split("")
//
//   let i = 0;
//   let j = strArray.length-1;
//   let temp;
//   while(i<j){
//     temp = strArray[i];
//     strArray[i] = strArray[j];
//     strArray[j] = temp;
//     i++;
//     j--;
//   }
//
//  return strArray.join("")
//
// }

module.exports = reverse;
