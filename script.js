const titulo = document.querySelector('h1');
const background = document.querySelector('body');
const botao = document.querySelector('a');

const cores = ['pink', 'blue', 'red', 'green', 'yellow', 'orange'];

botao.addEventListener('click', function(){
    const numeroAleatorio = Math.floor(Math.random() * cores.length);
    background.style.background = cores[numeroAleatorio];
    titulo.innerText = `A cor atual é: ${cores[numeroAleatorio]}`;
});
