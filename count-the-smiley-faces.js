// https://www.codewars.com/kata/count-the-smiley-faces/train/javascript

// return the total number of smiling faces in the array
function countSmileys(arr) {
  var amountOfSmileys = 0;
  arr.forEach(function(item){
    var eyes = item[0]
    if (item.length > 2){
      var nose = item[1];
      var mouth = item[2];
    }else{
      var mouth = item[1];
    }
    if ((eyes === ":" || eyes === ";") && (!nose || (nose === "-" || nose === "~")) && (mouth === "D" || mouth === ")")) amountOfSmileys++;
  })
  return amountOfSmileys;
}
testArray1 = [':)', ';(', ';}', ':-D'];       // returns 2
testArray2 = [';D', ':-(', ':-)', ';~)'];     // returns 3
testArray3 = [';]', ':[', ';*', ':$', ';-D']; // returns 1

console.log(countSmileys([':)', ';(', ';}', ':-D']));
// => returns 2 ( :) , :-D )
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
// => returns 3 ( ;D , :-) , ;~) )
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
// => returns 1 ( ;-D )