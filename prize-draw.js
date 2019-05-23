// https://www.codewars.com/kata/prize-draw/train/javascript

function rank(st, we, n) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let names = st.split(',')
  let rankArray = [];
  if (st.length === 0) {
    return "No participants"
  } else if (n > names.length){
    return "Not enough participants"
  } else {
    names.forEach((name, index) => {
      let winningNumber = name.length;
      name.split('').forEach(letter => {
        winningNumber += alphabet.indexOf(letter.toLowerCase())+1
      })
      winningNumber *= we[index]
      rankArray.push([name, winningNumber])
    })
    rankArray.sort(function(a,b){
      return b[1] - a[1] || a[0] > b[0]
    });
    console.log(rankArray)
    return (rankArray[n-1][0])
  }
}