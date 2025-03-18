// question one
let word ='extravaganza';
console.log(word.slice(8));
// question two
 let constFood ='The quick fox jumped over the lazy dog';
let newFood = constFood.slice(0,4) + 'eat' + constFood.slice(4);
console.log(newFood);
//question three
let constStory= "The quick brown fox jumps over the lazy dog"
function countOccurrences(text, word) {
    return text.toLowerCase().split(word.toLowerCase()).length - 1;}
    console.log(countOccurrences(constStory, "the"));
    console.log(countOccurrences(constStory, "brown"))
//question four
 let constString1 ='The pupils are reading in the library';
let word1 =constString1.includes('are'? 'are' : 'not included');
console.log(word1);


let constString2 ='The child was sitting at the table before it fell';
let word2 =constString2.includes('sitting'? 'sitting' : 'not included');
console.log(word2);
//question five
let x ='wonderful';
let y='amazing';
let w='UndERneath';
let z='A wonderful world';
console.log(x.toUpperCase());
console.log(y.toLowerCase());
console.log(w.toLowerCase());
console.log(z.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));