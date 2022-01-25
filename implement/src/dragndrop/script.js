const draggables = document.querySelectorAll('draggable');
const containers = document.querySelectorAll('container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag over');
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
})

containers.forEach(container => {
    container.addEventListener('dragover', () => {
        //container.classList.add('dragging');
        console.log('drag over');
    });

    container.addEventListener('dragover', () => {
        //container.classList.add('dragging');
        console.log('drag over');
    });

})