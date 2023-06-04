//mengambil object yang dibutuhkan
const addTask = document.querySelector('.button-icon');
const taskContainer = document.querySelector('.task-container');

addTask.addEventListener('click', function(){
    const task = document.createElement('div');
    task.className = 'task';

    //masukkan ke container
    taskContainer.appendChild(task);
});



