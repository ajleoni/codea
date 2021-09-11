
// declaring the components of the message

let subject =['Far','Mor','Noemi','Vanessa','Lenu','Benji'];
let verbum =['spiser','kaster','husker','angriber','læser','studerer','hjælper'];
let predicate=['æbler','sten','snegle','bogen','computer','matematik','skraldet'];

// function to select a random word from an array
const selectWord = (arr) => {
    let i = Math.floor(Math.random()*arr.length);
    return arr[i];
}

// probability that the subject word is also the predicate
let p = 0.3;

// Code to output the full message
if (p>Math.random()) {
    console.log(`My Message is: ${selectWord(subject)} ${selectWord(verbum)} ${selectWord(predicate)}!`);
} else {
    console.log(`My Message is: ${selectWord(subject)} ${selectWord(verbum)} ${selectWord(subject)}!`);
}
 
