const tambah = document.querySelector('.tombol');
const task = document.querySelector('.task');

tambah.addEventListener('click', function(){
    //first wrap
    const tambahWrapTask = document.createElement('div');
    tambahWrapTask.className = 'wrapTask';

    //its element
    const tambahCheck = document.createElement('div');
    tambahCheck.className = 'check';
    const tambahFill = document.createElement('div');
    tambahFill.className = 'fill';

    //lets put some species
    const tambahCheckInput = document.createElement('input');
    tambahCheckInput.type = 'checkbox';
    const tambahFillInput = document.createElement('input');
    tambahFillInput.type = 'text';

    //concanate it
    tambahCheck.appendChild(tambahCheckInput);
    tambahFill.appendChild(tambahFillInput);

    tambahWrapTask.appendChild(tambahCheck);
    tambahWrapTask.appendChild(tambahFill);

    task.appendChild(tambahWrapTask);
});