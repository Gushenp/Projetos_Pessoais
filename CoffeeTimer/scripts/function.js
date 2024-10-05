const functions = document.querySelectorAll('.function');
const timerContainer = document.querySelector('.timer-container')

function addAnimation() {
    functions.forEach(func => {
        func.classList.add('animation-on'); // Adiciona a classe highlight a todos os elementos
    });

    timerContainer.classList.add('timer-container-on')
}

function removeAnimation() {
    functions.forEach(func => {
        func.classList.remove('animation-on'); // Remove a classe highlight de todos os elementos
    });

    timerContainer.classList.remove('timer-container-on')
}

functions.forEach(func => {
    func.addEventListener('mouseover', addAnimation); // Adiciona a classe quando o mouse passa por cima
    func.addEventListener('mouseout', removeAnimation); // Remove a classe quando o mouse sai
});