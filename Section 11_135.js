console.log("Connected to JS!");

function printReverse(arr){
  last = testList.length - 1
  for (var i = last; i >= 0; i--) {
    console.log(arr[i]);
  }
}

var testList = [1,2,3,4,5,6,7,8,9,10];

// isUniform starts here

function isUniform(arr){
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// sumArray starts here:

function sumArray(arr){
  var total = 0
  arr.forEach(function(element){
    total += element;
  })
  return total
}

// max starts here:
function max(arr){
  var m = arr[0];
  arr.forEach(function(element){
    if (element>m) {
    m=element
  }
})
  return m
}
