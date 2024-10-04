const cronometerView = document.getElementById('cronometer-view')
const startButton = document.getElementById('start-button')

let starTime = {
    minutes: 2,
    seconds: 10,
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
        
        let secondsT = 59;
        cronometerView.innerHTML = startCount.format('HH:mm:ss')

        await delay(1000)
            if (second > 0 || secondsT === 59){
                while(second > 0) {
                    second -= 1;
                    let startCount = moment().hour(0).minute(minute).second(second);
                    cronometerView.innerHTML = startCount.format('HH:mm:ss')
                    console.log(startCount.format('HH:mm:ss'))
                    await delay(1000)
                }
            } else {
                while(secondsT > 0) {
                    secondsT -= 1
                    let startCount = moment().hour(0).minute(minute).second(second);
                    cronometerView.innerHTML = startCount.format('HH:mm:ss')
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



startButton.addEventListener('click', timerExecutation)