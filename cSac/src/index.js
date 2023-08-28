var colorIndex = 0;
var shapeIndex = 1;
var colors = ["#e81416", "#ffa500", "#4b369d", "#79c314", "#faeb36", "#70369d"];
var shapes = ["square", "triangle-bottomleft", "rectangle", "circle"];
var colorButton = document.getElementById("button-color");

var shapeButton = document.getElementById("button-shape");

colorButton.addEventListener("click", changeColor);
shapeButton.addEventListener("click", changeShape);

function changeColor() {
  document.getElementById("outer-div").style.backgroundColor =
    colors[colorIndex++];

  if (colorIndex == colors.length) {
    colorIndex = 0;
  }
}

function changeShape() {
  var shapeDiv = document.getElementById("inner-div");
  shapeDiv.className = shapes[shapeIndex++];
  if (shapeIndex == shapes.length) {
    shapeIndex = 0;
  }
}
