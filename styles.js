function isNumeric(value) {
    return !isNaN(value) && value.trim() !== "";
  }
  let num;
  do {
    num = prompt("Enter a number:");
  } while (!isNumeric(num));
  
  num = parseInt(num);
  let result = "Number inputted: " + num + "<br><br>";
  
  if (num % 2 !== 0) {
    for (let i = num; i >= 1; i--) {
      for (let j = 0; j < num; j++) {
        result += i + " ";
      }
      result += "<br>";
    }
  } else {
    for (let i = num; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        result += i + " ";
      }
      result += "<br>";
    }
  }
  document.getElementById("output").innerHTML = result;
  