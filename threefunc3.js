function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

function getNewRandomColor(e) {
    var myArray = ['red', 'green', 'blue'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("myDiv").style.backgroundColor = rand;
}