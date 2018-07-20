var toDos = ["Buy turtleneck"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    newTodos();
  } else if (input === "delete") {
    deleteTodos();
  }
  input = prompt("What would you like to do?");
}
console.log("You quit the app!");

function listTodos(){
  console.log("*****");
  toDos.forEach(function(todo,i){
  console.log(i+": "+todo);
  })
  console.log("*****");
}
function newTodos(){
  var newTodo = prompt("Add item below");
  console.log("item added");
  toDos.push(newTodo);
}

function deleteTodos(){
  var index = prompt("Enter index of item you want to delete")
  toDos.splice(index,1);
  console.log("item deleted");
}
