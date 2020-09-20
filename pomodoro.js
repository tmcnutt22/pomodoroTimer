/*
todo:
1. create on-click functionality to keep track of timer.
2. this will start a count down clock from 25 minutes, then a popup or sound notification to rest for 5 minutes. then it will loop again.
3. we want the clock to be visual
4. UI elements of create start, pause, reset functionality buttons
5. create functionality so that after 4 loops there is a longer 15 minute break.
*/

var workTime = 25 * 60 * 1000; //minutes converting to millisenconds
// var restTimeShort = 5 * 60 * 1000;
// var restTimeLong = 10 * 60 * 1000;
var i = 1; //i is the amount of time to decrement by in seconds.

setInterval(function startCountDownTimer() {
  var timeInterval = i * 1000; //converts into milliseconds
  var oneSecondLess = workTime - timeInterval;

  var minutes = Math.floor((oneSecondLess % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((oneSecondLess % (1000 * 60)) / 1000);

  //string format and return in html

  i++;
}, 1000);

//On click stuff
var startButton = document.querySelector('div button');
var timeLabel = document.querySelector('div h2');

startButton.onclick = document.timeLabel.innerHTML('Hello world');
