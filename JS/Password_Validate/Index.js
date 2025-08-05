const imput= document.querySelector('#text')
const btn = document.querySelector(`#add`)
const tasks = document.querySelector('#tasks')

btn.addEventListener('click', () => {
    console.log(imput.value)
    const template = `
        <p>$(imput.value)</p> 
    `
    tasks.insertAdjacentHTML(`beforeend`, template)
})
