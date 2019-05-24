// https://www.codewars.com/kata/duplicate-encoder/train/javascript

function duplicateEncode(word){
  let finalString = ""
  letters = word.toLowerCase().split('')
  letters.map(letter => {
    letters.filter(item => item == letter.toLowerCase()).length > 1 ?
    finalString += ")" : finalString += "("
  })
  return finalString
}