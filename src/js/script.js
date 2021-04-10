const labirinto = [];
const inicio    = { x: null, y: null };
const destino   = { x: null, y: null };
const tamanho   = 10;
const minotauro = [];

function onInit()
{
    for ( var i = 0; i < tamanho; i ++)
    {
        labirinto.push([]);
        for ( var j = 0; j < tamanho; j ++)
        {
            labirinto[i].push({
                left  : false,
                right : false,
                bottom: false,
                top   : false
            });
        }
    }

    inicio.x = parseInt(Math.random() * tamanho);
    inicio.y = parseInt(Math.random() * tamanho);
    let flag = false;
    
    while (!flag) // Enquanto o inicio for igual ao destino
    {
        destino.x = parseInt(Math.random() * tamanho);
        destino.y = parseInt(Math.random() * tamanho);

        if (destino.x != inicio.x || destino.y != destino.x)
            flag = true;
    }

    caminho();
    gerarMinotauro();
}

function caminho()
{
    let flag   = false;
    let x      = inicio.x;
    let y      = inicio.y;

    while (!flag)
    {
        let porta = parseInt(Math.random() * 4);

        switch (porta)
        {
            case 0:
                if (y != 0)
                {
                    // console.log(x, y, 'top');
                    labirinto[x][y].top    = true;
                    y --;
                    labirinto[x][y].bottom = true;
                }

                break;
            case 1:
                if (x != tamanho - 1)
                {
                    // console.log(x, y, 'right');
                    labirinto[x][y].right  = true;
                    x ++;
                    labirinto[x][y].left   = true;
                }

                break;
            case 2:
                if (y != tamanho - 1)
                {
                    // console.log(x, y, 'bottom');
                    labirinto[x][y].bottom   = true;
                    y ++;
                    labirinto[x][y].top      = true;
                }

                break;
            case 3:
                if (x != 0)
                {
                    // console.log(x, y, 'left');
                    labirinto[x][y].left  = true;
                    x --;
                    labirinto[x][y].right = true;
                }

                break;
        }

        // flag = true;

        if (x == destino.x && y == destino.y)
            flag = true;
    }

    salasBloqueadas();
}

function salasBloqueadas()
{
    const bloqueados = [];

    for (var i = 0; i < tamanho; i ++)
    {
        for (var j = 0; j < tamanho; j ++)
        {
            if (!labirinto[i][j].top && !labirinto[i][j].left && !labirinto[i][j].right && !labirinto[i][j].bottom)
            bloqueados.push({x: i, y: j});
        }
    }

    if (bloqueados.length == 0)
        return;

    let flag = false;

    while (!flag)
    {
        var random = parseInt(Math.random() * bloqueados.length);
        const opcoes = [];

        if (checkSala(bloqueados[random].x - 1, bloqueados[random].y)) opcoes.push('left');
        if (checkSala(bloqueados[random].x + 1, bloqueados[random].y)) opcoes.push('right');
        if (checkSala(bloqueados[random].x, bloqueados[random].y - 1)) opcoes.push('top');
        if (checkSala(bloqueados[random].x, bloqueados[random].y + 1)) opcoes.push('bottom');

        if (opcoes.length == 0) continue;

        const selecionado = opcoes[parseInt(Math.random() * opcoes.length)];
        labirinto[bloqueados[random].x][bloqueados[random].y][selecionado] = true;

        switch (selecionado)
        {
            case 'left':
                labirinto[bloqueados[random].x - 1][bloqueados[random].y].right = true; break;
            case 'right':
                labirinto[bloqueados[random].x + 1][bloqueados[random].y].left = true; break;
            case 'top':
                labirinto[bloqueados[random].y - 1][bloqueados[random].y].bottom = true; break;
            case 'bottom':
                labirinto[bloqueados[random].y + 1][bloqueados[random].y].top = true; break;
        }

        bloqueados.splice(random, 1);

        if(bloqueados.length == 0) flag = true;
    }

    console.log(labirinto);
}

function checkSala(x, y)
{
    if (x < 0 || x >= tamanho || y < 0 || y >= tamanho) return false;

    return labirinto[x][y].left || labirinto[x][y].right || labirinto[x][y].top || labirinto[x][y].bottom;
}

function gerarMinotauro()
{
    let flag = false;

    while (!flag)
    {
        const x = parseInt(Math.random() * tamanho);
        const y = parseInt(Math.random() * tamanho);

        if ((inicio.x == x && inicio.y == y) || (destino.x == x && destino.y == y))
            continue;

        minotauro.push({x: x, y: y});
        flag = true;
    }
}

//=======================================================

let posicao = {x: null, y: null};
let direcao = 'N';

function start()
{
    posicao.x = inicio.x;
    posicao.y = inicio.y;
    mostrarPortas();
}

function mostrarPortas()
{
    let imagem = '';
    switch (direcao)
    {
        case 'N':
            if (labirinto[posicao.x][posicao.y].left)
                imagem += 'left';
            if (labirinto[posicao.x][posicao.y].top)
                imagem += 'top';
            if (labirinto[posicao.x][posicao.y].right)
                imagem += 'right';
            break;
        case 'S':
            if (labirinto[posicao.x][posicao.y].right)
                imagem += 'left';
            if (labirinto[posicao.x][posicao.y].bottom)
                imagem += 'top';
            if (labirinto[posicao.x][posicao.y].left)
                imagem += 'right';
            break;
        case 'L':
            if (labirinto[posicao.x][posicao.y].bottom)
                imagem += 'left';
            if (labirinto[posicao.x][posicao.y].left)
                imagem += 'top';
            if (labirinto[posicao.x][posicao.y].top)
                imagem += 'right';
            break;
        case 'R':
            if (labirinto[posicao.x][posicao.y].top)
                imagem += 'left';
            if (labirinto[posicao.x][posicao.y].right)
                imagem += 'top';
            if (labirinto[posicao.x][posicao.y].bottom)
                imagem += 'right';
            break;
    }

    if (imagem == '')
        imagem = 'beco';

    imagem += '.png';

    document.getElementById('fundo').src = './src/images/' + imagem;
    
    console.log(posicao, labirinto[inicio.x][inicio.y]);
}

function mover(x, y)
{
    console.log(x, y);
    if (x < 0 || x >= tamanho || y < 0 || y >= tamanho)
        return;

    posicao.x = posicao.x + x;
    posicao.y = posicao.y + y;

    mostrarPortas();
}


onInit();
start();