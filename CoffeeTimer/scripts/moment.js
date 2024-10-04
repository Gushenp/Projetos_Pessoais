/* const startButton = document.getElementById("start-button")
const cronometerView = document.getElementById("cronometer-view")
let starTime = {
    minutes: 2,
    seconds: 5,
};

let seconds = starTime.seconds;
let minutes = starTime.minutes;
let format = (Number(([minutes, seconds]).join('')))

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timerExecutation() {
    while (minutes > -1) {
        let timeNow = moment(`"${minutes}"`, "mmss").format("mm:ss")
        console.log(timeNow)
        let secondsT = 4;
            if (seconds > 0){
                while(seconds > 0) {
                    let timeNow = moment(`"${minutes}${seconds}"`, "mmss").format("mm:ss")
                    seconds -= 1;
                    console.log(timeNow)
                    await delay(1000)
                }
            } else {
                while(secondsT > 0) {
                    let timeNow = moment(`"00${secondsT}"`, "mmss").format("mm:ss")
                    secondsT -= 1;
                    console.log(timeNow)
                    await delay(1000)
                }
            }
        minutes -= 1;
    }
}

timerExecutation();*/

let starTime = {
    minutes: 1,
    seconds: 0,
};

let minute = starTime.minutes;
let second = starTime.seconds;

let startCount = moment().hour(0).minute(minute).second(second);

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timerExecutation() {

    while (minute > -1) {
        let startCount = moment().hour(0).minute(minute).second(second);
        console.log(startCount.format('HH:mm:ss'))
        
        let secondsT = 59;
        await delay(1000)
            if (second > 0 || secondsT === 59){
                while(second > 0) {
                    second -= 1;
                    let startCount = moment().hour(0).minute(minute).second(second);
                    console.log(startCount.format('HH:mm:ss'))
                    await delay(1000)
                }
            } else {
                while(secondsT > 0) {
                    secondsT -= 1
                    let startCount = moment().hour(0).minute(minute).second(second);
                    console.log(startCount.format('HH:mm:ss'))
                    await delay(1000)
                }
            }
    minute -= 1;
    second = 59;
    }{
        console.log('contagem finalizada')
    }
}

timerExecutation()