// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', inputChange )

function inputChange(event) {
    //  console.log (event.currentTarget.value)
    if (input.value ==='') {
        return span.textContent = 'Anonymous';
    }
    else span.textContent = event.currentTarget.value;
    
}
