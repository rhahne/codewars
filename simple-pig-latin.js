// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  var pigLatinArray = [];
  str.split(" ").forEach(function(word){
    if (word === "?" || word === "!") {
      pigLatinArray.push(word.substr(1) + word[0]);
    } else{
      pigLatinArray.push(word.substr(1) + word[0] + "ay");
    } 
  })
  return pigLatinArray.join(" ");
}

console.log(pigIt("Hello World !"));
// => elloHay orldWay !
console.log(pigIt("Pig latin is cool"));
// => igPay atinlay siay oolcay
console.log(pigIt("Yes it works"));
// => esYay tiay orksway