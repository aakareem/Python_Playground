var button = document.querySelector("button");
var body = document.querySelector("body");
var isOrange = false;

//
// button.addEventListener("click", function(){
//   console.log("clicked");
//   if  (isOrange){
//         body.style.background = "white";
//   } else {
//        body.style.background = "orange";
//   }
//     isOrange = !isOrange;
//     })

button.addEventListener("click", function(){
  console.log("clicked");
  body.classList.toggle("purple");
    })
