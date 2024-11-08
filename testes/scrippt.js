const botao = document.getElementById('botao');
const body = document.getElementById('bodyy');

let list = [];
let value = 0;

botao.addEventListener('click', () => {
    let task = `
    <div class="object" id="object-${value}">
        Esse objeto tem o valor: ${value}
        <button class="excluir" data-id="${value}">Excluir</button>
    </div>`;
    
    body.insertAdjacentHTML('beforeend', task);
    list.push(value);
    value++;

    const deleteButtons = document.querySelectorAll('.excluir');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'));
            list = list.filter(item => item !== id);

            const taskToRemove = document.getElementById(`object-${id}`);
            if (taskToRemove) {
                taskToRemove.remove();
            }
        });
    });
});

//aaaaaaaaa

const submit = document.getElementById('enviar')
const input = document.getElementById('inputtext')
const texto = document.getElementById('textt')

submit.addEventListener('click', () => {
    texto.textContent = input.value
})