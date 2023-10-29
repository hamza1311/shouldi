const generateButton = document.querySelector('#generate-btn')!
const addButton = document.querySelector('#add-btn')!
const optionValue = document.querySelector('#option-value')! as HTMLInputElement
const list = document.querySelector('#list')!
const winnerP = document.querySelector('#winner')!

addButton?.addEventListener('click', (e) => {
    e.preventDefault()
    if (optionValue.value === '') return alert('Please enter a value')
    const listRow = document.querySelector('#list-row') as HTMLTemplateElement;
    const clone = listRow.content.cloneNode(true) as HTMLLIElement;
    const li = clone.querySelector('li')
    li!.textContent = optionValue.value
    list?.appendChild(clone)
    optionValue.value = ''
    optionValue.focus()
})

generateButton?.addEventListener('click', () => {
    const li = [...list.querySelectorAll('li')];
    const random = Math.floor(Math.random() * li.length)
    const winner = li[random]
    winnerP.textContent = winner.textContent
    winnerP.setAttribute('data-hint', 'false')
})