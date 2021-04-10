let ajudas = 0;

function abrirMapa(labirinto, tamanho, posicao, minotauro, destino) {
    if (ajudas == 0)
    {
        alert('Sem mais ajudas');
        return;
    }
    else
    {
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
                    document.querySelector('#border' + j + i).style.borderLeft = '3px solid #01a2e8';
                }
                
                if (labirinto[i][j].right) {
                    document.querySelector('#border' + j + i).style.borderRight = '3px solid #01a2e8';
                }

                if(labirinto[i][j].bottom) {
                    document.querySelector('#border' + j + i).style.borderBottom = '3px solid #01a2e8';
                }

                if(labirinto[i][j].top) {
                    document.querySelector('#border' + j + i).style.borderTop = '3px solid #01a2e8';
                }

                //console.log('dentro do for', labirinto[i][j]);
            }
        }
    }

    ajudas --;

    if (ajudas == 0)
    {
        $('#botaovisualizar').attr('disabled', 'disabled');
    }
}

function dificuldade(num)
{
    ajudas = num;
    document.getElementById('opcao').remove();
    if (ajudas == 0)
    {
        $('#botaovisualizar').attr('disabled', 'disabled');
    }
}
