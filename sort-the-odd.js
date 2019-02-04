// https://www.codewars.com/kata/sort-the-odd/train/javascript

function sortArray(array) {
  var oddNumbersArray = []
  var indexOfOdds = []
  array.forEach(function(num,index){
    if (num % 2 != 0){
      oddNumbersArray.push(num)
      indexOfOdds.push(index)
    }
  })
  oddNumbersArray = oddNumbersArray.sort();
  var i = 0;
  indexOfOdds.forEach(function(index){
    array[index] = oddNumbersArray[i];
    i++;
  })
  return array
}
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

console.log(sortArray([5, 3, 2, 8, 1, 4])
// => [1, 3, 2, 8, 5, 4]