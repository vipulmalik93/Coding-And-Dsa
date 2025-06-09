// PRINT THIS:

// *
// **
// ***
// ****

// APPROACH1:
function printPattern1(row, col) {
for(let i = 0; i < row; i++) {
    let star= '';
    for(let j = 0 ; j <= i ; j++) {
        star += '*'
    }
    console.warn(star)
}
}

printPattern1(4, 4);


// APPROACH2:

function printPattern2(row) {
    for(let i = 0; i < row; i++) {
    //   
        console.warn("*".repeat(i+1))
    }
    }
    
    printPattern2(4);