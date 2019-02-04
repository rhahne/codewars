// https://www.codewars.com/kata/human-readable-time/train/javascript

function humanReadable(totalSeconds) {
  var seconds = 00;
  var minutes = 00;
  var hours = 00;
  if(totalSeconds < 60 && totalSeconds > 0){
    seconds = totalSeconds;
  }else if (totalSeconds < 3600){
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds/60);
  }else if (totalSeconds >= 3600){
    hours = Math.floor(totalSeconds/3600)
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds/60)
    seconds = Math.floor(totalSeconds%60)
  }
  return inTwoDigit(hours) + ":" + inTwoDigit(minutes) + ":" + inTwoDigit(seconds)
}
function inTwoDigit(num){
  return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

console.log(humanReadable(22222));
// => 06:10:22
console.log(humanReadable(690));
// => 00:11:30
console.log(humanReadable(10457));
// => 02:54:17