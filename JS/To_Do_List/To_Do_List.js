const input= document.querySelector('#text')
const btn = document.querySelector('#btnadd')
const tasks = document.querySelector('#tasks')

btn.addEventListener('click', () => {
     const taskText = input.value.trim(); // Elimina espacios innecesarios

    if (taskText !== "") {
        const template = `
            <li>${taskText}</li>
        `;
        tasks.insertAdjacentHTML('beforeend', template);
        input.value = '';
    } else {
        alert("Por favor escribe una tarea.");
    }
});