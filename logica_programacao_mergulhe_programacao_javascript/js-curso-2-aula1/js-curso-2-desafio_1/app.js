let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function console(){
    console.log("O botão foi clicado");
}
function alerta(){
    alert('Eu amo JS');
}
function entrada(){
    let cidade = prompt("Fala um nome de uma cidade: ");
    alert(`Estive em ${cidade} e lembrei de voce`);
}
function soma(){
    let numero1 = prompt("Digite um numero: ");
    let numero2 = prompt("Digite outro numero: ");
    let soma = numero1 + numero2;
    alert(`a soma entre os numeros ${numero1} e ${numero2} é ${soma}`);
}