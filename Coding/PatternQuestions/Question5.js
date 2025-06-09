// PRINT THIS PATTERN:

// ****
//  ***
//   **
//    *


// APPROACH1:
function printPattern1(row, col) {
     for (let i = 0; i< row; i++) {
        let star = '';
         for(let j = 0; j<col ; j++) {
            if(j < i ) {
                star += " "
            } else {
                star += "*"
            }
        }

        console.warn(star);
     }
}

// printPattern1(4,4);


// APPROACH2:
function printPattern2(row) {
    for (let i = row; i> 0 ; i--) {
            console.warn(" ".repeat(row -i ) +   "*".repeat(i))
    }
}

printPattern2(4);