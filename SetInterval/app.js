let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");

let timer = document.getElementById("timer");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let message = document.getElementById("message");

let totalSeconds = 0;
let interval = null;

function updateDisplay() {

    let hours = Math.floor(totalSeconds / 3600);

    let minutes = Math.floor((totalSeconds % 3600) / 60);

    let seconds = totalSeconds % 60;

    timer.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

}



startBtn.addEventListener("click", () => {

    if (interval !== null) {
        return;
    }

    if (totalSeconds === 0) {

        let hours = Number(hoursInput.value);
        let minutes = Number(minutesInput.value);
        let seconds = Number(secondsInput.value);

        if (
            hoursInput.value === "" ||
            minutesInput.value === "" ||
            secondsInput.value === "" ||
            hours < 0 ||
            minutes < 0 || minutes >= 60 ||
            seconds < 0 || seconds >= 60
        ) {
            message.textContent = "Please enter a valid time!";
            return;
        }

        totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds <= 0) {
            message.textContent = "Please enter a time greater than zero!";
            return;
        }
    }

    message.textContent = "";

    updateDisplay();

    interval = setInterval(() => {

        totalSeconds--;

        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(interval);
            interval = null;
            message.textContent = "Time is up!";
        }

    }, 1000);

});

pauseBtn.addEventListener("click", () => {

    clearInterval(interval);

    interval = null;

    message.textContent = "Timer paused!";

});


resetBtn.addEventListener("click", () => {

    clearInterval(interval);

    interval = null;

    totalSeconds = 0;

    updateDisplay();

    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";

    message.textContent = "";

});
