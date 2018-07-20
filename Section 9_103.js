var secretNumber = 323;

var guess = Number(prompt("What is your guess?"));
if (guess===secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
else if (guess>secretNumber) {
  alert("Too High");
}
else {
  alert("Too Low");
}
