function abrirMapa(labirinto, tamanho, posicao, minotauro, destino) {
    console.log(labirinto);   
    console.log(tamanho); 
    console.log(posicao);
    console.log(minotauro[0]);
    console.log(destino);
    document.querySelector('#fa-user' + posicao.y + posicao.x).classList.remove('d-none');
    document.querySelector('#fa-minotauro' + minotauro[0].y + minotauro[0].x).classList.remove('d-none');
    document.querySelector('#fa-chegada' + destino.y + destino.x).classList.remove('d-none');
    document.querySelector('#room' + posicao.y + posicao.x).classList.remove('d-show');
    document.querySelector('#room' + posicao.y + posicao.x).classList.add('d-none');
    document.querySelector('#room' + minotauro[0].y + minotauro[0].x).classList.remove('d-show');
    document.querySelector('#room' + minotauro[0].y + minotauro[0].x).classList.add('d-none');
    document.querySelector('#room' + destino.y + destino.x).classList.remove('d-show');
    document.querySelector('#room' + destino.y + destino.x).classList.add('d-none');

    for(let i = 0; i < tamanho; i++) {
        for(let j = 0; j < tamanho; j++) {
            if (labirinto[i][j].left) {
                document.querySelector('#border' + i + j).style.borderLeft = '3px solid red';
            }
            
            if (labirinto[i][j].right) {
                document.querySelector('#border' + i + j).style.borderRight = '3px solid red';
            }

            if(labirinto[i][j].bottom) {
                document.querySelector('#border' + i + j).style.borderBottom = '3px solid red';
            }

            if(labirinto[i][j].top) {
                document.querySelector('#border' + i + j).style.borderTop = '3px solid red';
            }

            //console.log('dentro do for', labirinto[i][j]);
        }
    }


}