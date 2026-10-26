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


startBtn.addEventListener("click", ()=>{
    let hours= Number(hoursInput.value);
    let minutes= Number(minutesInput.value);
    let seconds= Number(secondsInput.value);
     totalSeconds= hours*3600 + minutes*60 + seconds;
     clearInterval(interval);
     updateDisplay();

        interval= setInterval(()=>{
            totalSeconds--;
            updateDisplay();
             if (totalSeconds <= 0) {
            clearInterval(interval);
            message.textContent = "Time is up!";
        }
        },1000)

})