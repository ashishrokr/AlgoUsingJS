// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples


// function pyramid(n) {
//   const midpont = Math.floor((2 * n -1) /2)
//   for(i=0;i<n;i++){
//     let str = ''
//     for(j=0;j<2* n-1;j++){
//       if(midpont - i <= j && midpont + i >= j){
//         str += '#'
//       }
//       else{
//         str += ' '
//       }
//     }
//     console.log(str)
//   }
//
// }



function pyramid(n,row = 0,str ='') {
  if(n === row){
    return
  }

  if(str.length === 2*n-1){
    console.log(str)
    pyramid(n,row+1)
    return
  }


  const midpont = Math.floor((2 * n -1)/2)
  if( midpont - row <= str.length && midpont + row >= str.length){
    str += '#'
  }
  else{
    str += ' '
  }
  pyramid(n,row,str)
}


module.exports = pyramid;
