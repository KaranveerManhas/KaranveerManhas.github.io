
var toggle = document.getElementById("app");
var isToggled = true;
toggle.addEventListener("click", toggleColorBlack);

function toggleColorBlack() {
  if (isToggled) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    toggle.style.justifyContent = "right";
    document.getElementById("heading").style.color = "white";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    toggle.style.justifyContent = "left";
    document.getElementById("heading").style.color = "black";
  }
  isToggled = !isToggled;
}
