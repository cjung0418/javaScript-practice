const $time = document.getElementsByClassName('time')[0];
const showTime = document.createElement('h1');
const showSec = document.createElement('h1');
let time = 0;
let sec = 0;
let isActive = 0;
showTime.innerText = time;
showSec.innerText = sec;
const startButton = document.createElement('button');
startButton.innerText = 'start!';
const stopButton = document.createElement('button');
stopButton.innerText = 'stop!';

var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
let nIntervld;
let timeId;
startButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isActive) {
    isActive = 1
    timeId = setInterval(() => {    
      sec += 1
      if (sec % 60 === 0) audio.play();
      showSec.innerText = sec % 60;
    }, 1000)
  }
})
stopButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearInterval(nIntervld);
  clearInterval(timeId);
  console.log('stop!');
  nIntervld = null;
  timeId = null;
})
function ding() {
  audio.play();
  console.log('start!')
  time += 1;
  showTime.innerText = time;  
}

$time.append(startButton);
$time.append(stopButton);
$time.append(showTime);
$time.append(showSec);