<h1> Grid container </h1>

<h2>Display</h2>
<p>
  Define o elemento como um grid container.
</p>

    display: grid;
    // Torna o elemento um grid container.
    display: inline-grid;
    // Torna o elemento um grid container porém com comportamento inline.
    display: subgrid;
    // Para grids dentro de grids (ainda não é suportado, porém você pode normalmente colocar display: grid; no 
    grid dentro do grid que funciona).

</hr>
<h2>grid-template-columns</h2>
<p>
  Define o número total de colunas que serão criadas no grid.
</p>

      grid-template-columns: 100px 100px 100px 100px;
    // Quatro colunas de 100px de largura são criadas
    grid-template-columns: 1fr 2fr;
    // Duas colunas são criadas, sendo a segunda com o dobro do tamanho da primeira. fr é uma unidade fracional. O tamanho do conteúdo é respeitado, ou seja, se o conteúdo na primeira coluna for maior que o da segunda, a primeira será maior.
    grid-template-columns: minmax(200px, 1fr) 1fr 1fr;
    // Três colunas são criadas, a primeira terá no mínimo 200px de largura e no máximo 1fr(isso significa que após 200px ela se expande da mesma forma que as outras colunas). As outras duas colunas vão ter 1fr.
    grid-template-columns: repeat(3, 1fr);
    // Cria 3 colunas com 1fr de tamanho. O repeat seria a mesma coisa que escrever 1fr 1fr 1fr.
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    // Cria automaticamente um total de colunas que acomode 
      itens com no mínimo 100px de largura.

</hr>
  
<h2>grid-template-rows</h2>
<p>
    Define a quantidade de linhas no grid.
</p>

    grid-template-rows: 50px 100px 50px 150px;
    // Cria 4 linhas no grid, sendo a primeira com 50px, segunda 100px, terceira 50px e quarta 150px. Caso o grid necessite de mais linhas, elas terão o tamanho de acordo com o conteúdo.
    grid-template-rows: 1fr 2fr;
    // Cria 2 linhas no grid, sendo a segunda com cerca de duas vezes o tamanho da primeira.

</hr>
<h2>grid-template-areas</h2>
<p>
    Define áreas específicas no grid. O ponto (.) pode ser utilizado para criar áreas vazias.
</p>

    grid-template-areas:
    "logo nav nav"
    "sidenav content advert"
    "sidenav footer footer";
    // Cria 3 colunas e 3 linhas. [logo] ocupa a coluna 1, linha 1. [nav] ocupa da coluna 2 a 3, linha 1. [sidenav] ocupa a coluna 1, da linha 2 a 3. [content] ocupa a coluna 2, linha 2. [advert] ocupa a coluna 3, linha 2. 
    [footer] ocupa da coluna 2 a 3, linha 3

</hr>
<h2>grid-template</h2>
<p>
  Atalho para definir o grid-template-columns, grid-template-rows e grid-template-areas.
</p>

    grid-template:
    "logo nav nav" 50px
    "sidenav content advert" 150px
    "sidenav footer footer" 100px
    /  100px 1fr 50px;
    // A primeira linha com 50px, segunda com 150px e terceira com 100px. A primeira coluna com 100px, a segunda 1fr e a terceira com 50px.

</hr>
<h2>gap</h2>
<p>
  Define o gap (gutter) entre os elementos do grid.
</p>

    gap: 20px
    // Define 20px entre os elementos do grid (linha e coluna).
    column-gap: 20px
    // Define 20px de distância entre as colunas.
    row-gap: 20px
    // Define 20px de distância entre as linhas.

</hr>
<h2>grid-auto-columns</h2>
<p>
    Define o tamanho das colunas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma coluna que não foi definida).
</p>

    grid-auto-columns: 100px
    // As colunas implícitas, geradas automaticamente, terão 100px de largura.

</hr>
<h2>grid-auto-rows</h2>
<p>
Define o tamanho das linhas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma linha que não foi definida).
</p>

    grid-auto-rows: 100px
    // As linhas implícitas, geradas automaticamente, terão 100px de altura.

</hr>
<h2>grid-auto-flow</h2>
<p>
    Define o fluxo dos itens no grid. Se eles vão automaticamente gerar novas linhas ou colunas.
</p>

    grid-auto-flow: row
    // Automaticamente gera novas linhas.
    grid-auto-flow: column
    // Automaticamente gera novas colunas.
    grid-auto-flow: dense
    // Tenta posicionar o máximo dos elementos que existirem nas primeiras partes do grid (pode desorganizar o conteúdo).

</hr>
<h2>grid</h2>
<p>
  Atalho geral para definir o grid: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns e grid-auto-flow
</p>

    grid: 100px / 1fr 1fr
    // Gera uma linha com 100px de altura e 2 colunas com 1fr.
    grid: 100px / auto-flow 100px 50px
    // Gera uma linha com 100px de altura. O grid-auto-flow é definido como column (pois está logo antes da definição das colunas). Ele também define o grid-auto-columns com 100px 50px

</hr>
<h2>justify-content</h2>
<p>
  Justifica os itens do grid em relação ao eixo x (horizontal).
</p>

    justify-content: start
    // Justifica os itens ao início.
    justify-content: end
    // Justifica os itens ao final.
    justify-content: stretch
    // Estica os itens.
    justify-content: space-around
    // Distribui espaço entre os elementos. (O início e final são menores que os espaços internos).
    justify-content: space-between
    // Cria um espaço entre os elementos, ignorando o início e final.
    justify-content: space-evenly
    // Cria um espaço igual entre as colunas (no início e final também).
    justify-content: center
    // Centraliza o conteúdo.

</hr>
<h2>align-content</h2>
<p>
Alinha os itens do grid em relação ao eixo y (vertical).
</p>

    align-content: start
    // Alinha os itens ao início.
    align-content: end
    // Alinha os itens ao final.
    align-content: stretch
    // Estica os itens.
    align-content: space-around
    // Distribui espaço entre os elementos. (O início e final são menores que os espaços internos).
    align-content: space-between
    // Cria um espaço entre os elementos, ignorando o início e final.
    align-content: space-evenly
    // Cria um espaço igual entre as colunas (no início e final também).
    align-content: center
    // Centraliza o conteúdo.

</hr>
<h2>justify-items</h2>
<p>
Justifica o conteúdo dos itens do grid em relação ao eixo x (horizontal). Justifica em relação a célula.
</p>

    justify-items: start
    // Justifica os itens ao início.
    justify-items: end
    // Justifica os itens ao final.
    justify-items: center
    // Centraliza o conteúdo.
    justify-items: stretch
    // Estica os itens.

</hr>
<h2>align-items</h2>
<p>
  Alinha o conteúdo dos itens do grid em relação ao eixo y (vertical). Alinha em relação a célula
</p>

    align-items: start
    // Alinha os itens ao início.
    align-items: end
    // Alinha os itens ao final.
    align-items: center
    // Centraliza o conteúdo.
    align-items: stretch
    // Estica os itens.
</hr>
