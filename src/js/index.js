function abrirMapa(labirinto, tamanho, posicao, minotauro, destino) {
    console.log(labirinto);   
    console.log(tamanho); 
    console.log(posicao);
    console.log(minotauro[0]);
    console.log(destino);
    document.querySelector('#fa-user' + posicao.x + posicao.y).classList.remove('d-none');
    document.querySelector('#fa-minotauro' + minotauro[0].x + minotauro[0].y).classList.remove('d-none');
    document.querySelector('#fa-chegada' + destino.x + destino.y).classList.remove('d-none');
    document.querySelector('#room' + posicao.x + posicao.y).classList.remove('d-show');
    document.querySelector('#room' + posicao.x + posicao.y).classList.add('d-none');
    document.querySelector('#room' + minotauro[0].x + minotauro[0].y).classList.remove('d-show');
    document.querySelector('#room' + minotauro[0].x + minotauro[0].y).classList.add('d-none');
    document.querySelector('#room' + destino.x + destino.y).classList.remove('d-show');
    document.querySelector('#room' + destino.x + destino.y).classList.add('d-none');

    for(let i = 0; i < tamanho; i++) {
        for(let j = 0; j < tamanho; j++) {
            if (labirinto[i][j].left) {
                document.querySelector('#border' + i + j).style.borderLeft = '3px solid red';
            } else if (labirinto[i][j].right) {
                document.querySelector('#border' + i + j).style.borderRight = '3px solid red';
            }
            console.log('dentro do for', labirinto[i][j]);
        }
    }

    
}