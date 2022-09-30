// 1
// 2
// bitter
// 4
// sweet
// bitter
// 7
// 8
// bitter
// sweet
// 11
// bitter
// 13
// 14
// bittersweet

// getallen van 1 tot 15 tonen
for(let index = 1; index <= 15; index++){
    // controle of deelbaar is door 3 en 5
    if(index % 3 == 0 && index % 5 == 0){
       console.log("bittersweet");
    }
    // controle indien deelbaar door 3
    else if(index % 3 == 0 ){
        console.log("bitter")
    }
    // controle indien deelbaar door 3
    else if(index % 5 == 0 ){
        console.log("sweet")
    }
    // elk ander geval, gewoon het getal afdrukken
    else{
        console.log(index)
    }
}

// betere methode
for(let index = 1; index <= 15; index++){
    let output = "";
    // controle indien deelbaar door 3
    if(index % 3 == 0 ){
        output += "bitter";
    }
    // controle indien deelbaar door 3
    if(index % 5 == 0 ){
        output += "sweet";
    }
    // elk ander geval, gewoon het getal afdrukken
    else if(index % 3 != 0){
        output = index;
    }
    console.log(output);
}