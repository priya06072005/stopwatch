let startTime, intervalId;

function startStopwatch() {
    startTime = Date.now() - (startTime ? startTime : 0);
    intervalId = setInterval(updateStopwatch, 10);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stopStopwatch() {
    clearInterval(intervalId);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function resetStopwatch() {
    clearInterval(intervalId);
    startTime = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function updateStopwatch() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor((currentTime / 60000) % 60);
    const seconds = Math.floor((currentTime / 1000) % 60);
    const milliseconds = (currentTime % 1000).toString().slice(0, 2);

    const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    document.getElementById("stopwatch").textContent = timeString;
}

document.getElementById("startButton").addEventListener("click", startStopwatch);
document.getElementById("stopButton").addEventListener("click", stopStopwatch);
document.getElementById("resetButton").addEventListener("click", resetStopwatch);