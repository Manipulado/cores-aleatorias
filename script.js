const numeroAlterado = document.querySelector('.contador p');
numeroAlterado.textContent = 0;
let count = 0
// btnDecrementa = document.querySelector('#decrementa');
// btnReset = document.querySelector('#reset');
// btnIncrementa = document.querySelector('#incrementa');
const botoes = document.querySelectorAll('a');


botoes.forEach((i) => {
    i.addEventListener('click', function(){
        if(i.innerText === 'INCREMENTAR'){
            count++;
        } else if (i.innerText === 'DECREMENTAR'){
            count--;
        } else {
            count = 0;
        }
        numeroAlterado.textContent = count
    })
})