<h1> Flex item </h1>

<h2>flex-grow</h2>
<p>
  Define a habilidade de um flex item crescer. Por padrão o valor é zero, assim os flex itens ocupam um tamanho máximo relacionado o conteúdo interno deles ou ao width definido.

Ao definir 1 para todos os Flex Itens, eles tentarão ter a mesma largura e vão ocupar 100% do container. Digo tentarão pois caso um elemento possua um conteúdo muito largo, ele irá respeitar o mesmo.

Se você tiver uma linha com quatro itens, onde três são flex-grow: 1 e um flex-grow: 2, o flex-grow: 2 tentará ocupar 2 vezes mais espaço extra do que os outros elementos.

OBS: justify-content não funciona em items com flex-grow definido.
</p>

              flex-grow: número;
            // Basta definir um número
              flex-grow: 0;
              // Obedece o width do elemento ou o flex-basis.

<hr>
<h2>flex-basis</h2>
<p>
Indica o tamanho inicial do flex item antes da distribuição do espaço restante.

Quando definimos o flex-grow: 1; e possuímos auto no basis, o valor restante para ocupar o container é distribuído ao redor do conteúdo do flex-item.
</p>

      flex-basis: auto;
      // Esse é o padrão, ele faz com que a largura da base seja igual a do item. Se o item não tiver tamanho especificado, o tamanho será de acordo com o conteúdo.
      flex-basis: unidade;
      // Pode ser em %, em, px e etc.
      flex-basis: 0;
      // Se o grow for igual ou maior que 1, ele irá tentar manter todos os elementos com a mesma largura, independente do conteúdo (por isso 0 é o valor mais comum do flex-basis). Caso contrário o item terá a largura do seu conteúdo.

<hr>
<h2>flex-shrink</h2>
<p>
Define a capacidade de redução de tamanho do item.
</p>

      flex-shrink: 1;
      // Valor padrão, permite que os itens tenham os seus tamanhos (seja esse tamanho definido a partir de width ou flex-basis) reduzidos para caber no container.
      flex-shrink: 0;
      // Não permite a diminuição dos itens, assim um item com flex-basis: 300px; nunca diminuirá menos do que 300px, mesmo que o conteúdo não ocupe todo esse espaço.
      flex-shrink: número;
      // Um item com shrink: 3 diminuirá 3 vezes mais que um item com 1.

<hr>
<h2>flex</h2>
<p>
    Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados.

Para melhor consistência entre os browsers, é recomendado utilizar a propriedade flex ao invés de cada propriedade separada.

No exemplo é possível ver as mesmas configurações do exemplo do flex-basis porém agora utilizando apenas a propriedade flex.
</p>

         flex: 1;
        // Define flex-grow: 1; flex-shrink: 1; e flex-basis: 0; (em alguns browsers define como 0%, pois estes ignoram valores sem unidades, porém a função de 0 e 0% é a mesma.)
        flex: 0 1 auto;
        // Esse é o padrão, se você não definir nenhum valor de flex ou para as outras propriedades separadas, o normal será flex-grow: 0, flex-shrink: 1 e flex-basis: auto.
        flex: 2;
        // Define exatamente da mesma forma que o flex: 1; porém neste caso o flex-grow será de 2, o flex-shrink continuará 1 e o flex-basis 0.
        flex: 3 2 300px;
        // flex-grow: 3, flex-shrink: 2 e flex-basis: 300px;

<hr>
<h2>order</h2>
<p>
Modifica a ordem dos flex itens. Sempre do menor para o maior, assim order: 1, aparece na frente de order: 5.
</p>

     order: número;
    // Número para modificar a ordem padrão. Pode ser negativo.
    order: 0;
    // 0 é o valor padrão e isso significa que a ordem dos itens será a ordem apresentada no HTML. Se você quiser colocar um item do meio da lista no início da mesma, sem modificar os demais, o ideal é utilizar um valor negativo para este item, já que todos os outros são 0.

<hr>
<h2>align-self</h2>
<p>
O align-self serve para definirmos o alinhamento específico de um único flex item dentro do nosso container. Caso um valor seja atribuído, ele passara por cima do que for atribuído no align-items do container.

Vale lembrar que o alinhamento acontece tanto em linha quanto em colunas. Por exemplo o flex-start quando os itens estão em linhas, alinha o item ao topo da sua linha. Quando em colunas, alinha o item ao início (esquerda) da coluna.
</p>

       align-self: auto;
      // Valor inicial padrão. Vai respeitar o que for definido pelo align-items no flex-container.
      align-self: flex-start;
      // Alinha o item ao início.
      align-self: flex-end;
      // Alinha o item ao final.
      align-self: center;
      // Alinha o item ao centro.
     align-self: baseline;
     // Alinha o item a linha de base.
      align-self: stretch;
      // Estica o item.
<hr>
