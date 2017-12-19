// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let charA = buildString(stringA)
    let charB = buildString(stringB)

    if(Object.keys(charA).length !== Object.keys(charB).length){
      return false;
    }

    for(let char in charA){
        if(charA[char] !== charB[char]){
          return false
        }
    }
    return true

}


function buildString(str){
  let obj ={}
  for(let char of str.replace(/[^\w/]/g,'').toLowerCase()){
    obj[char] = obj[char] ++ || 1;
  }
    console.log(obj)
  return obj
}

module.exports = anagrams;
