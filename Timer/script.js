const timeInput = document.querySelector('.time-input');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const container = document.querySelector('.time');

timeInput.addEventListener('input', (event) => {
    if (event.target.value.length > 5) {
        timeInput.disabled = true;
    }
    if (event.target.value === '000000') {
        startBtn.disabled = true;
    }
})

startBtn.addEventListener('click', startTimer);

function startTimer() {
    timeInput.classList.add('hidden');

    let hours = Number(timeInput.value.slice(0, 2));
    let minutes = Number(timeInput.value.slice(2, 4));
    let seconds = Number(timeInput.value.slice(4, 6));

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

        seconds--;

        if (seconds === 0 && minutes !== 0) {
            seconds = 60;
            minutes--;
        }
        if (seconds === 0 && minutes === 0 && hours !== 0) {
            seconds = 60;
            minutes = 60;
            hours--
        }
        if (seconds === 0 && minutes === 0 && hours === 0) {
            console.log('stopped');
            clearInterval(interval);
        }

    }, 1000)
}

resetBtn.addEventListener('focus', () => {
    clearInterval(interval)
    let hours = Number(timeInput.value.slice(0, 2));
    let minutes = Number(timeInput.value.slice(2, 4));
    let seconds = Number(timeInput.value.slice(4, 6));

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    container.innerHTML = `${h}:${m}:${s}`;
})