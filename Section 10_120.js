function isEven(x){
  if (x%2===0) {
    return true;
  }
  return false;
}

function factorial(x){
  if (x===0) {
    return 1;
  }
  for (var i = x-1; i > 0; i--) {
    x*=i;
  }
  return x;
}

function kebabToSnake(str){
  var newStr = str.replace(/-/g,"_");
  return newStr;
}
