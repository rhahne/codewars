function firstNonRepeatingLetter(s) {
  var nonRepeatingLetters = [];
  s.split("").forEach(function(letter){
    var amountOfMatches = 0;
    s.split("").forEach(function(checkLetter){
      if (letter === checkLetter) amountOfMatches++;
    })
    if (amountOfMatches === 1) nonRepeatingLetters.push(letter);
  })
  return nonRepeatingLetters[0] === undefined || s.length === 0  ? "" : nonRepeatingLetters[0];
}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moomere"));
console.log(firstNonRepeatingLetter("aaaallll"));
