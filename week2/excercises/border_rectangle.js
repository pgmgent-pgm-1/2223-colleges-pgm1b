const nCols = 7;
const nRows = 4;
let output = "";
for (let rows = 0; rows < nRows; rows++) {
    for (let col = 0; col < nCols; col++) {
        if(rows == 0 || rows == nRows -1 || col == 0 || col == nCols -1){
            output += "* "
            //output += "*" + (col == nCols - 1 ? "" : " ");
            // continue;
        }
        else
        {
            output += "  "
        }      
    }
    output += "\n";
} 
console.log(output);

// *  *  *  *  *  *  *  *
// *                    *
// *                    *
// *  *  *  *  *  *  *  *