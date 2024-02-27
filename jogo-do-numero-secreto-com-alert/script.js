alert('Comecou o jogo de advinhacao!')
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute = -1;
let tentativas = 1;
let palavraTentativa;

while(chute != numeroSecreto){
    chute = prompt(`escolha um numero de 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto){
        tentativas >= 2? palavraTentativa = 'tentativas': palavraTentativa = 'tentativa';
        alert(`Voce acertou com ${tentativas} ${palavraTentativa}`);
        break;
    }
    if(chute > numeroSecreto){
        alert(`O numero secreto e menor do que ${chute}`);
    }
    if(chute < numeroSecreto){
        alert(`O numero secreto e maior do que ${chute}`);
    }

    tentativas++;
}










// if(chute == numeroSecreto){
//     alert('Voce acertou!')
// }else{
//     alert('tente novamente')
// }