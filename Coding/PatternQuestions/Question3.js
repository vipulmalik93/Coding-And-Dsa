// PRINT THIS:

// ****
// ***
// **
// *

// APPROACH1:
function printPattern1(row, col) {
   for(let i = 0;  i< row; i++) {
    let star = ''
    for(let j = col; j > i; j--) {
        star += "*";
    }
    console.warn(star);
   }
}

// printPattern1(4, 4);


// APPROACH2:

function printPattern2(row) {
         for(let i = row; i > 0; i--) {
            console.warn("*".repeat(i))
         }
}


printPattern2(4)




