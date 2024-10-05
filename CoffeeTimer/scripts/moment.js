const cronometerView = document.getElementById('cronometer-view');
const startButton = document.getElementById('start-button');

startButton.classList.add('start')


let starTime = {
    minutes: 25,
    seconds: 0,
};

let minute = starTime.minutes;
let second = starTime.seconds;
let timerActive = false;
let timer;

function updateDisplay() {
    const displayTime = moment().hour(0).minute(minute).second(second);
    cronometerView.innerHTML = displayTime.format('mm:ss');
}

async function timerExecutation() {
    if (timerActive) {
        clearInterval(timer);
        timerActive = false;
        startButton.classList.remove('stop')
        startButton.classList.add('start')
        startButton.innerText = 'Start';
        return;
    }

    timerActive = true;
    startButton.classList.add('stop')
    startButton.innerText = 'Stop';
    
    updateDisplay();

    timer = setInterval(() => {
        if (second === 0) {
            if (minute === 0) {
                clearInterval(timer);
                timerActive = false;
                startButton.innerText = 'Start';
                console.log('Contagem finalizada');
                return;
            } else {
                minute--;
                second = 59;
            }
        } else {
            second--;
        }
        updateDisplay();
    }, 1000);
}

updateDisplay();

startButton.addEventListener('click', timerExecutation);