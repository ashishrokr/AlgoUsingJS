// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for(let i=0;i<n;i++){
//       let st = ''
//     for(let j=0;j<n;j++){
//       if(j<=i){
//           st += '#';
//       }else {
//           st += ' ';
//       }
//     }
//     console.log(st)
//   }
// }


function steps(n,row = 0,str = '') {
  if(n === row){
    return;
  }
  if(n === str.length){
    console.log(str)
    steps(n,row+1)
    return;
  }

  if(str.length<=row){
    str += '#'
  }else {
    str += ''
  }
  steps(n,row,str)
}


module.exports = steps;
