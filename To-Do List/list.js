

const tambah = document.querySelector('.tombol');

tambah.addEventListener('click', function(){
    const task = document.querySelector('.task');
    const tambahTask = document.createElement('input');
    tambahTask.type = 'checkbox';

    const text = document.querySelector('.task')
    const tambahText = document.createElement('input');
    tambahText.type = 'text';

    task.appendChild(tambahTask);
    text.appendChild(tambahText);
    // text.style.display = "none";
});