var list = [];
function createDictionary() {
  var newWord = document.getElementById("addWord").value;
  if (newWord == "" || newWord == null) {
    alert("Please fill the required field");
  } else {
    list.push(newWord);
  }
  return false;
}

function getInputValue() {
  var inputValue = document.getElementById("myInput").value;
  var flag = 0;
  for (var i = 0; i < list.length; ++i) {
    if (inputValue == list[i]) {
      flag = 1;
    }
  }
  if (flag == 1) {
    document.body.style.backgroundColor = "green";
    document.getElementById("message").innerHTML="The word searched exists in the dictionary";
  } else {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("message").innerHTML="The word searched does not exist in the dictionary";
  }
}
