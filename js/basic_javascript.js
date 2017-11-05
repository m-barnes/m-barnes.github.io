function alertBox() {
  alert("Danger, Will Robinson. Danger!")
};

function promptBox() {
  var name = prompt("Please enter your name: ");
  document.getElementById("testArea").innerHTML = "Hello, " + name + "!";
};

function confirmBox() {
  var confirmation;
  if (confirm("Are we cleared to proceed?") == true) {
    confirmation = "Confirmed. We are a go.";
  }
  else {
    confirmation = "That's a negative, good buddy.";
  }
  document.getElementById("testArea").innerHTML = confirmation;
};

function danger(my_image) {
  my_image.src = "./images/danger.png";
};

function safe(my_image) {
  my_image.src= "./images/safe.png";
}

function randomNumber() {
  document.getElementById("randomValue").innerHTML = Math.floor(Math.random()*20)+1;
}
