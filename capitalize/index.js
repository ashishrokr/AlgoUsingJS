// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for(i=1;i<str.length;i++){
//     if(str[i - 1] === " "){
//         result += str[i].toUpperCase()
//       }else{
//         result += str[i]
//       }
//     }
//   return result
//
// }


function capitalize(str) {
  let result = []


  for(let char of str.split(' ')){
    console.log(str[0][0])
        result.push(char[0].toUpperCase() + char.slice(1))
    }
  return result.join(" ")

}

module.exports = capitalize;
