const cronometerView = document.getElementById('cronometer-view');
const startButton = document.getElementById('start-button');
const head  = document.getElementById('head')
const startAudio = document.getElementById('start_audio');
const stopAudio = document.getElementById('stop_audio');
const finishedAudio = document.getElementById('finised_audio')


startButton.classList.add('start')
pomodoroModeStyle()

function pomodoroModeStyle(){
    const  link = document.createElement("link")
    link.rel = "stylesheet";
    link.href = "./styles/pomodoro_time.css";
    document.head.appendChild(link)
}

function breakModeStyle(){
    const  link = document.createElement("link")
    link.rel = "stylesheet";
    link.href = "./styles/break_time.css";
    document.head.appendChild(link)
}

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
        stopAudio.play()
        startButton.classList.add('start')
        startButton.innerText = 'Start';
        return;
    }

    timerActive = true;
    startButton.classList.add('stop')
    startAudio.play()
    startButton.innerText = 'Stop';
    
    updateDisplay();

    timer = setInterval(() => {
        if (second === 0) {
            if (minute === 0) {
                clearInterval(timer);
                timerActive = false;
                startButton.innerText = 'Start';
                console.log('Contagem finalizada');
                minute = starTime.minutes
                second  = starTime.seconds
                updateDisplay()
                finishedAudio.play()
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

//change timer

const functions = document.querySelectorAll('.function');
const functionsContainer = document.querySelector('.functions-container');
const timerContainer = document.querySelector('.timer-container');
const message = document.getElementById('message');

function addAnimationFC(){
    functionsContainer.classList.add('AnimationFC')
    innerTextToFunctions()
    timerContainer.classList.add('AnimationTC')
}

function removeAnimationFC(){
    functionsContainer.classList.remove('AnimationFC')
    removeTextToFunctions()
    timerContainer.classList.remove('AnimationTC')
}

function innerTextToFunctions() {
    setTimeout(() => {
        const functionsp = document.querySelectorAll('.function p');
        functionsp.forEach(p => {
            p.classList.add('show')
        });
    }, 500)
}

function removeTextToFunctions() {
    setTimeout(() => {
        const functionsp = document.querySelectorAll('.function p');
        functionsp.forEach(p => {
            p.classList.remove('show')
        });
    }, 0)
} 

functionsContainer.addEventListener('mouseenter', addAnimationFC)
functionsContainer.addEventListener('mouseleave', removeAnimationFC)

const function25 = document.getElementById('function-25')
const function50 = document.getElementById('function-50')
const sbreak = document.getElementById('function-break-5')
const lbreak = document.getElementById('function-break-30')

function changeTimerTo25() {
    if (timerActive) {
        clearInterval(timer);
    }
    pomodoroModeStyle()
    starTime.minutes = 25;
    starTime.seconds = 0; 
    minute = starTime.minutes;
    second = starTime.seconds
    message.innerHTML = '<p>Pomodoro time!</p>'
    timerActive = false;
    startButton.classList.remove('stop')
    startButton.classList.add('start')
    startButton.innerText = 'Start';
    updateDisplay(); 
}

function changeTimerTo50() {
    if (timerActive) {
        clearInterval(timer);
    }
    pomodoroModeStyle()
    starTime.minutes = 50;
    starTime.seconds = 0; 
    minute = starTime.minutes;
    second = starTime.seconds
    message.innerHTML = '<p>Pomodoro time!</p>'
    timerActive = false;
    startButton.classList.remove('stop')
    startButton.classList.add('start')
    startButton.innerText = 'Start';
    updateDisplay(); 
}

function changeTimerToSbreak() {
    if (timerActive) {
        clearInterval(timer);
    }
    breakModeStyle()
    starTime.minutes = 5;
    starTime.seconds = 0; 
    minute = starTime.minutes;
    second = starTime.seconds
    message.innerHTML = '<p>Beak time!</p>'
    timerActive = false;
    startButton.classList.remove('stop')
    startButton.classList.add('start')
    startButton.innerText = 'Start';
    updateDisplay();  
}


function changeTimerToLbreak() {
    if (timerActive) {
        clearInterval(timer);
    }
    breakModeStyle()
    starTime.minutes = 30;
    starTime.seconds = 0; 
    minute = starTime.minutes;
    second = starTime.seconds
    message.innerHTML = '<p>Beak time!</p>'
    timerActive = false;
    startButton.classList.remove('stop')
    startButton.classList.add('start')
    startButton.innerText = 'Start';
    updateDisplay();  
}

function25.addEventListener('click', changeTimerTo25);
function50.addEventListener('click', changeTimerTo50);
sbreak.addEventListener('click', changeTimerToSbreak);
lbreak.addEventListener('click', changeTimerToLbreak);

function changeColor(element) {
    element.classList.add('function-animation');
}

function removeColor(element) {
    element.classList.remove('function-animation');
}

function select(element){
    functions.forEach(func => func.classList.remove('select'))
    element.classList.add('select')
}

functions.forEach(func => {
    func.addEventListener('mouseover', () => changeColor(func));
    func.addEventListener('mouseout', () => removeColor(func));
    func.addEventListener('click', () => select(func));
});
