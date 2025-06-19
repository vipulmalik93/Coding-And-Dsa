// PRINT THIS PATTERN:
//    *
//   **
//  ***
// ****


// APPROACH1:
function printPattern1(row, col) {
    for(let i = 0 ; i < row; i++)  {
        let star = '';
        for(let j = col; j >= 0; j--) {
           if( j <= i) {
            star += "*"
           } else {
            star += " "
           }
        }

        console.warn(star);
    }
}

printPattern1(4, 4);

// APPROACH2:
function pattern2 (row, column) {
    let str = '';
      for (let i = row ; i > 0 ; i-- ) {
          for (let j = 0; j < column; j++) {
              if(j >= i-1) {
                  str += '*'
              } else {
                  str += ' '
              }
              
          }
          console.warn(str);
          str = ''
      }
}


pattern2(4, 4)


// APPROACH3:

function printPattern2(row) {
    for(let i = 0 ; i < row; i++)  {
       console.warn(" ".repeat(row - i -1) + "*".repeat(i+1))
    }
}

printPattern2(4);