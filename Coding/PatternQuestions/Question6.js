//    *
//   ***
//  *****

function pattern1 (row) {
    let str = '';
     for(let i = 1 ; i <= row; i++ ) {
         for(let j = 1 ; j <= row - i ; j++) {
              str += " "
         }
         
         for (let k = 1; k <= 2 * i -1; k++) {
               str += "*"
         }
         
         console.warn(str);
         str = ''
     }
}


pattern1(5);


// APPROACH2:

function pattern2 (row) {
    for (let i = 1 ; i <= row; i++) {
        console.warn(" ".repeat(row-i) + "*".repeat(2*i-1))
    }
  }
  
  
  pattern2(5)










