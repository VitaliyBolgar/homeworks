// ------ V A R I A B L E S ------ //
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.ul');
// const progressBar = document.querySelector('.progressBar');
// const completeTaskBar = document.querySelector('.completeTaskBar');

// ------ F U N C T I O N S ------ //
const allTasks = [];
// const checkedTasks = [];

const createTask = (task) => {
    allTasks.push(task);
    inp.value = '';
}



const renderTaskList = () => {
    ul.innerHTML = '';
    allTasks.forEach(task => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const completeBtn = document.createElement('button');

        deleteBtn.innerHTML = '✘';
        deleteBtn.classList.add('deleteBtn');
        completeBtn.innerHTML = '✔';
        completeBtn.classList.add('completeBtn');
        div.innerHTML = task.text;
        div.classList.add('taskName');
        li.append(completeBtn, div, deleteBtn);
        ul.append(li);

        completeBtn.addEventListener('click', () => {
            div.style = 'transition: .3s; text-decoration: line-through; opacity: .5;';  
        })

        deleteBtn.addEventListener('click', () => {
            removeTask(task);
            renderTaskList();
        })
        
})   
    const removeTask = (task) => {
        const index = allTasks.findIndex((t) => {
            return t.id === task.id;
        })
        allTasks.splice(index, 1);
}   
}



// ------ E V E N T S ------ //
btn.addEventListener('click', () => {
    const task = {};
    task.text = inp.value;
    task.id = new Date().getTime();
    task.done = true;
    createTask(task);
    renderTaskList();
})
