const hoursInput = document.querySelector('.hours');
const minutesInput = document.querySelector('.minutes');
const secondsInput = document.querySelector('.seconds');

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const container = document.querySelector('.time');

let time = [hoursInput, minutesInput, secondsInput];

time.forEach((el) => {
    el.addEventListener('input', (event) => {
        if (event.target.value.length >= 2) {
            el.disabled = true;
        }
    })
})

startBtn.addEventListener('click', startTimer);

function startTimer() {
    time.forEach((el) => el.classList.add('hidden'));

    let hours = Number(hoursInput.value);
    let minutes = Number(minutesInput.value);
    let seconds = Number(secondsInput.value);

    if (hours === 0 && minutes === 0 && seconds === 0) {
        let h = hours < 10 ? '0' + hours : hours;
        let m = minutes < 10 ? '0' + minutes : minutes;
        let s = seconds < 10 ? '0' + seconds : seconds;

        container.classList.add('big-font');
        container.innerHTML = `${h}:${m}:${s}`;
        return
    }

    if (seconds > 60) {
        seconds = 60;
        minutes += 1
    } else if (minutes > 60) {
        minutes = 60;
        hours += 1
    }

    container.classList.add('big-font');

    interval = setInterval(function () {

        let h = hours < 10 ? '0' + hours : hours;
        let m = minutes < 10 ? '0' + minutes : minutes;
        let s = seconds < 10 ? '0' + seconds : seconds;

        container.innerHTML = `${h}:${m}:${s}`;

        if (seconds === 0) {
            seconds = 60;
            minutes--;
        }

        seconds--;

        if (seconds === 0 && minutes !== 0) {
            seconds = 60;
            minutes--;
        }
        if (seconds === 0 && minutes === 0 && hours !== 0) {
            seconds = 60;
            minutes = 60;
            minutes--
            hours--
        }
        if (seconds === 0 && minutes === 0 && hours === 0) {
            clearInterval(interval);
        }
    }, 1000)
}

resetBtn.addEventListener('focus', () => {
    clearInterval(interval)
    let hours = Number(hoursInput.value);
    let minutes = Number(minutesInput.value);
    let seconds = Number(secondsInput.value);

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    container.innerHTML = `${h}:${m}:${s}`;
})