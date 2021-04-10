function oeste() {
    console.log('oeste');
}

function leste() {
    console.log('leste');
}

function norte() {
    console.log('norte');
}

function abrirMapa(labirinto, posicao, minotauro) {
    console.log(labirinto);   
    console.log(posicao);
    console.log(minotauro[0]);
    document.querySelector('#fa-user' + posicao.x + posicao.y).classList.remove('d-none');
    document.querySelector('#fa-minotauro' + minotauro[0].x + minotauro[0].y).classList.remove('d-none');
    document.querySelector('#room' + posicao.x + posicao.y).classList.remove('d-show');
    document.querySelector('#room' + posicao.x + posicao.y).classList.add('d-none');
    document.querySelector('#room' + minotauro[0].x + minotauro[0].y).classList.remove('d-show');
    document.querySelector('#room' + minotauro[0].x + minotauro[0].y).classList.add('d-none');


}