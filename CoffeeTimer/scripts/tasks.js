const listContainer = document.getElementById('listcontainer');
const addTaskButton = document.getElementById('addtaskbutton');

let TaskList = [];
let idNumber = 0;

function addTask() {
    createtask()
}

function createtask(){
    const task = document.createElement("div")
    task.className = "task"
    listContainer.appendChild(task)

    createinputscontainer(task)
    createbuttonsedcotainer(task)
}

function createinputscontainer(task) {
    const inputscontainer = document.createElement("div")
    inputscontainer.className = "inputtasks"
    task.appendChild(inputscontainer)

    createinputcheckbox(inputscontainer)
    createinputtext(inputscontainer)
    createinputsubmit(inputscontainer)
}

function createinputcheckbox(inputscontainer){
    const inputcheckbox = document.createElement("input")
    inputcheckbox.type = "checkbox"
    inputcheckbox.className = "taskcheckbox"
    inputscontainer.appendChild(inputcheckbox)
}

function createinputtext(inputscontainer) {
    const inputtext = document.createElement("input")
    inputtext.type = "text"
    inputtext.className  = "tasktext"
    inputscontainer.appendChild(inputtext)
    inputtext.focus()
}

function createinputsubmit(inputscontainer){
    const inputsubmit = document.createElement("input")
    inputsubmit.type = "submit"
    inputsubmit.value = "ok"
    inputsubmit.className = "tasksubmit"
    inputscontainer.appendChild(inputsubmit)
}

function createbuttonsedcotainer(task){
    const buttonsedconainer = document.createElement("div")
    buttonsedconainer.className = "buttonsed"
    task.appendChild(buttonsedconainer)

    createbuttons(buttonsedconainer)
}

function createbuttons(buttonsedconainer) {

    const buttonedittask = document.createElement("button")
    buttonedittask.className = "edittask"
    buttonedittask.innerHTML = 
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
    </svg>
    `
    buttonsedconainer.appendChild(buttonedittask)  
    
    const buttondeletetask = document.createElement("button")
    buttondeletetask.className = "deletetask"
    buttondeletetask.innerHTML = 
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
    </svg>
    `
    buttonsedconainer.appendChild(buttondeletetask)

    document.querySelectorAll(".deletetask").forEach(button => {
        button.addEventListener("click",() => {
            const taskcontainer = button.closest(".task")
            if (taskcontainer){
                taskcontainer.remove()
            }
        })
    })
}


addTaskButton.addEventListener('click', addTask);
/*  */