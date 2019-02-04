// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
  var windowCount = 1
  var bounceArray = []
  if (h < 1 || bounce <= 0 || bounce >= 1 || window >= h) return -1
  for (var i = 0; i < (h*5); i++){
    h = h * bounce
    bounceArray.push(h)
  }
  bounceArray.forEach(function(bouncer){
    if (bouncer > window) windowCount+=2;
  })
  return windowCount > 0 ? windowCount : -1 ;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
// => 3
console.log(bouncingBall(30.0, 0.66, 1.5));
// => 15
