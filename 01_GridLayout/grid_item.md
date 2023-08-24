<h1> Grid item </h1>

<h2>grid-column </h2>
<p>
  Define quais colunas serão ocupadas pelo grid item. É possível definir uma linha de início e final, assim o item irá ocupar múltiplas colunas.
</p>

    grid-column: 1
    // O item ocupará a coluna 1.
    grid-column: 1 / 3
    // O item ocupará a coluna 1 e 2 (Sim, isso mesmo, 1 e 2, pois os valores 1 / 3 são referentes as linhas da coluna. Isso significa que começa na linha 1 (início do grid) e vai até a linha 3, que é o começo da terceira coluna).
    grid-column-start: 2
    // O item vai começar na linha 2.
    grid-column-end: 4
    // O item vai terminar na linha 4.
    grid-column: span 2
    // O item irá ocupar duas colunas a partir de onde ele estiver.

<hr>
<h2>grid-row </h2>
<p>
  Define quais linhas serão ocupadas pelo grid item.

Atenção aqui, pois esse linha é referente a row. Porém as chamadas grid lines que por tradução também significam linhas do grid, são diferentes. Uma row (linha), possui sempre 2 grid lines (linhas do grid), uma no início dela e uma no final dela.
</p>

      grid-row: 1
      // O item ocupará a linha 1.
      grid-row: 1 / 3
      // O item ocupará a linha 1 e 2 (Sim, isso mesmo, 1 e 2, pois os valores 1 / 3 são referentes as linhas do grid. Isso significa que começa na linha 1 (início do grid) e vai até a linha 3 do grid, que é o começo da terceira linha).
      grid-row-start: 2
      // O item vai começar na linha do grid 2.
      grid-row-end: 4
      // O item vai terminar na linha do grid 4.
      grid-row: span 2
      // O item irá ocupar duas linhas a partir de onde ele estiver.
<hr>
<h2>grid-area </h2>
<p>
Define a área do item do grid. É um atalho para grid-row-start, grid-column-start, grid-row-end, grid-column-end.

O z-index pode ser utilizado para manipular a posição no eixo Z do item. Ou seja, se um item for posicionado em cima de outro, o z-index controla qual vêm na frente.
</p>

    grid-area: 1 / 2 / 4 / 3;
    // Este é um atalho para:
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 4;
    grid-column-end: 3;
    grid-area: header;
    // Vai posicionar o item na área definida como header.

<hr>
<h2>justify-self </h2>
<p>
  Justifica o item do grid em relação ao eixo x (horizontal). Justifica em relação a célula.
</p>

    justify-self: start
    // Justifica o item ao início.
    justify-self: end
    // Justifica o item ao final.
    justify-self: center
    // Centraliza o conteúdo.
    justify-self: stretch
    // Estica o item.
<hr>
<h2>align-self </h2>
<p>
  Justifica o item do grid em relação ao eixo y (vertical). Alinha em relação a célula.
</p>

    align-self: start
    // Alinha o item ao início.
    align-self: end
    // Alinha o item ao final.
    align-self: center
    // Centraliza o conteúdo.
    align-self: stretch
    // Estica o item.
<hr>
