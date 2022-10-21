"use strict";

// // document.onload = function() {
// //     var headingElement = document.createElement("h1");
// //     var textNode = document.createTextNode("Web Programming 1: Front-End");
// //     headingElement.appendChild(textNode);
// //     document.body.appendChild(headingElement);
// // }

// const list = ["test1", "test2", "test3", "test4"];

// const elements = document.querySelectorAll('div.class1');
// console.log(elements);
// elements.forEach((element, index) => {
//     element.innerHTML = list[index];
// })

const articleElements = document.querySelectorAll('#articles .article');
if ( articleElements.length > 0 ) {
    articleElements.forEach( (elem) => {
      console.log(elem);  
    });
  } else {
    console.log('No articles found!');
  }

// const concertElement = document.createElement('article');
// const lineupElement = document.getElementById('lineup');
// lineupElement.appendChild(concertElement);


const lineupElement = document.getElementById('lineup');
lineupElement.innerHTML += `
<article class="concert">
<h1>Concert 1</h1>
<h2>Artiest 1</h2>
<h2>Album 1</h2>
</article>
`;

// lineupElement.style.background = "red";
lineupElement.classList.add("red");


// lineupElement.style.background = "red";
lineupElement.classList.remove("red");
const changeColor = () => {
    lineupElement.classList.toggle("red");
    console.log(lineupElement.classList)
}
// lineupElement.classList.toggle("red");
// lineupElement.classList.toggle("red");

window.setInterval(changeColor, 1000);

