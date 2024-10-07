const olas = document.querySelectorAll('.ola');
const container = document.querySelector('.block1')


function addClass(element) {
    olas.forEach(ola => ola.classList.remove('red')); // Remove a classe de todos
    element.classList.add('red'); // Adiciona a classe ao clicado
}

olas.forEach(ola => {
    ola.addEventListener('click', () => addClass(ola));
});
