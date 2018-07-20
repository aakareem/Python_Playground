console.log("Print all numbers between -10 and 19");
var num1 = -10;
while (num1<20) {
  console.log(num1);
  num1++;
}

console.log("Print all even numbers bewtween 10 and 40");
var num1 = 10;
while (num1 <=40){
  if (num1 % 2 === 0) {
    console.log(num1);
  }
    num1++;
}
console.log("Print all odd numbers between 300 and 333");
var num1 = 300;
while (num1<=333) {
  if (num1%2 !== 0) {
    console.log(num1);
  }
    num1++;
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var num1 = 5;
while (num1<50) {
  if ((num1 % 5 === 0) && (num1 % 3 === 0)) {
      console.log(num1);
  }
  num1++;
}
