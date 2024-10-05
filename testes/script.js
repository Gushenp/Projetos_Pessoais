const olas = document.querySelectorAll('.ola');
const container = document.querySelector('.block1')

function addClass() {
    olas.forEach(ola => {
        ola.classList.add('olaVerde');
    });

    container.classList.add('block1T')

}

function removeClass() {
    olas.forEach(ola => {
        ola.classList.remove('olaVerde');
    });

    container.classList.remove('block1T')
}

olas.forEach(ola => {
    ola.addEventListener('mouseover', addClass); // Adiciona a classe quando o mouse passa por cima
    ola.addEventListener('mouseout', removeClass); // Remove a classe quando o mouse sai
});