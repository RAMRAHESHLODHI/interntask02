let hours = 0;
let minutes = 0;
let seconds = 0;
let lapTimes = [];

let intervalId = null;

document.querySelector('.start-btn').addEventListener('click', startStopwatch);
document.querySelector('.pause-btn').addEventListener('click', pauseStopwatch);
document.querySelector('.reset-btn').addEventListener('click', resetStopwatch);

function startStopwatch() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateStopwatch();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapTimes = [];
  updateStopwatch();
}

function updateStopwatch() {
  document.querySelector('.hours').textContent = pad(hours);
  document.querySelector('.minutes').textContent = pad(minutes);
  document.querySelector('.seconds').textContent = pad(seconds);
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

document.querySelector('.lap-btn').addEventListener('click', addLapTime);

function addLapTime() {
  const lapTime = `${hours}:${minutes}:${seconds}`;
  lapTimes.push(lapTime);
  document.querySelector('.lap-times').innerHTML += `<li>${lapTime}</li>`;
}