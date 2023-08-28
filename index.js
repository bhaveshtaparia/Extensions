const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
  minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
