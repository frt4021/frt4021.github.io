var button = document.getElementById('buton');
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var clicks = 0;
var interval;
var startTime;
var speed = 500;

function randomPosition() {
  var newLeft = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
  var newTop = Math.floor(Math.random() * (screenHeight - button.offsetHeight));
  button.style.position = 'absolute';
  button.style.left = newLeft + 'px';
  button.style.top = newTop + 'px';
}

function handleClick() {
  clicks++;
  if (clicks === 1) { 
    startTime = new Date();
    interval = setInterval(randomPosition, speed);
  } else if (clicks % 3 === 0) { 
    clearInterval(interval);
    speed -= 100; 
 
    interval = setInterval(randomPosition, speed);
  }
  if (clicks === 9) { 
    clearInterval(interval);
    var endTime = new Date();
    var timeTaken = (endTime - startTime) / 1000; 
    alert("You completed three rounds in " + timeTaken + " seconds.");
  }
}

button.addEventListener('click', handleClick);



