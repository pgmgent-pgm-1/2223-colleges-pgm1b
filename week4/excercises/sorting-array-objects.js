const library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      libraryID: 1254,
    },
    {
      title: "Gem Squash Tokoloshe",
      author: "Zadok Rachel",
      libraryID: 3245,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      libraryID: 4264,
    },
  ];


/**
 * Url: https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
 * employees.sort((a, b) => {
    let authorA = a.firstName.toLowerCase(),
        authorB = b.firstName.toLowerCase();

    if (authorA < authorB) {
        return -1;
    }
    if (authorA > authorB) {
        return 1;
    }
    return 0;
});
 */

// sort on author
library.sort((a, b) => {
    let authorA = a.author.toLowerCase(),
        authorB = b.author.toLowerCase();

    if (authorA < authorB) {
        return -1;
    }
    if (authorA > authorB) {
        return 1;
    }
    return 0;
});

console.log("Sort on author:",library);
/**
 * employees.sort((a, b) => {
    return a.age - b.age;
});
 * 
 */

// sort on author rev
//   library.sort((a, b) => {
//     if(a.author > b.author){
//         return 1;
//     }
//     if(a.author < b.author){
//         return -1;
//     }
//     return 0;
//   });

//   console.log(library);

  
//   library.sort((a, b) => {
//     if(a.author > b.author){
//         return -1;
//     }
//     if(a.author < b.author){
//         return 1;
//     }
//     return 0;
//   });

//   console.log(library);

  

//   library.sort((a, b) => {
//     return a.libraryID - b.libraryID;
//     // if(a.libraryID > b.libraryID){
//     //     return 1;
//     // }
//     // if(a.libraryID < b.libraryID){
//     //     return -1;
//     // }
//     // return 0;
//   });

//   console.log(library);

//   library.sort((a, b) => {
//     return b.libraryID - a.libraryID;
//   });

//   console.log(library);


  

library.sort((a, b) => {
    return a.title.length - b.title.length;
    // if (a.title.length < b.title.length) {
    //     return -1;
    // }
    // if (a.title.length > b.title.length) {
    //     return 1;
    // }
    // return 0;
});

console.log("Sort on title length:", library);
