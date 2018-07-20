var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input")
var p1Score = 0;
var p2Score = 0;
var p1ScoreHeader = document.querySelector("#p1Score");
var p2ScoreHeader = document.querySelector("#p2Score");
var limit = document.querySelector("p span");
var gameOver = false;

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1ScoreHeader.textContent = p1Score;
  p2ScoreHeader.textContent = p2Score;
  p1ScoreHeader.classList.remove("winner");
  p2ScoreHeader.classList.remove("winner");
  gameOver = false;
}

p1Button.addEventListener("click", function(){
  if (!gameOver) {
    p1Score++;
    if (p1Score === limit) {
      gameOver = true;
      p1ScoreHeader.classList.add("winner");
    }
    console.log(p1Score);
    p1ScoreHeader.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (p2Score === limit) {
      gameOver = true;
      p2ScoreHeader.classList.add("winner");
    }
  console.log(p2Score);
  p2ScoreHeader.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function (){
  reset();
});

numInput.addEventListener("change", function(){
  limit.textContent = this.value;
  limit = Number(this.value);
  reset();
})
