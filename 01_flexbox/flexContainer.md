<h1> Fundamentos Flexbox <h1>

<h2> Flex Container </h2>

<h2> Display</h2>
<p>
Define o elemento como um flex container, tornando os seus filhos flex-itens.

        display: flex;
        // Torna o elemento um flex container   automaticamente transformando todos os seus   filhos  diretos em flex itens.

<hr>
<h2>Flex - direction</h2>
<p>
Define a direção dos flex itens. Por padrão ele é row (linha), por isso quando o display: flex; é adicionado, os elementos ficam em linha, um do lado do outro.
<br>
A mudança de row para column geralmente acontece quando estamos definindo os estilos em media queries para o mobile. Assim você garante que o conteúdo seja apresentado em coluna única.

      flex-direction: row;
      // Os itens ficam em linha
      flex-direction: row-reverse;
      // Os itens ficam em linha reversa, ou seja 3, 2, 1.
      flex-direction: column;
      // Os itens ficam em uma única coluna, um embaixo do      outro.
      flex-direction: column-reverse;
      // Os itens ficam em uma única coluna, um embaixo do      outro, porém em ordem reversa: 3, 2 e 1.

</p>
<hr>
<h2>Flex-wrap</h2>
<p>
  Define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex itens sejam compactados além do limite do conteúdo.
<br>
Essa é geralmente uma propriedade que é quase sempre definida como flex-wrap: wrap; Pois assim quando um dos flex itens atinge o limite do conteúdo, o último item passa para a coluna debaixo e assim por diante.

    flex-wrap: nowrap;
    // Valor padrão, não permite a quebra de    linha.
    flex-wrap: wrap;
    // Quebra a linha assim que um dos flex     qitens não puder mais ser compactado.
    flex-wrap: wrap-reverse;
    // Quebra a linha assim que um dos flex  itens não puder mais ser compactado. A quebra é na direção contrária, ou seja  para a linha acima.
</p>
<hr>
<h2> Flex-flow</h2>
<p>
O flex-flow é um atalho para as propriedades flex-direction e flex-wrap. Você não verá muito o seu uso, pois geralmente quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.
<br>
E quando mudamos o flex-wrap para wrap, mantemos o padrão do flex-direction que é row.

            flex-flow: row nowrap;
                // Coloca o conteúdo em linha e não permite a quebra de linha.
            flex-flow: row wrap;
                // Coloca o conteúdo em linha e permite a quebra de linha.
            flex-flow: column nowrap;
                // Coloca o conteúdo em coluna e não permite a quebra de linha.
</p>  

<hr>
<h2>Justify-content</h2>
<p>
Alinha os itens flex no container de acordo com a direção. A propriedade só funciona se os itens atuais não ocuparem todo o container. Isso significa que ao definir flex: 1; ou algo similar nos itens, a propriedade não terá mais função
<br>
Excelente propriedade para ser usada em casos que você deseja alinhar um item na ponta esquerda e outro na direita, como em um simples header com marca e navegação.

                justify-content: flex-start;
                // Alinha os itens ao início do container.
                justify-content: flex-end;
                // Alinha os itens ao final do container.
                justify-content: center;
                // Alinha os itens ao centro do container.
                justify-content: space-between;
                // Cria um espaçamento igual entre os elementos. Mantendo o primeiro grudado no início e o último no final.
                justify-content: space-around;
               // Cria um espaçamento entre os elementos. Os espaçamentos do meio são duas vezes maiores que o inicial e final.

</p>

<hr>
<h2>Align-items</h2>
<p>
O align-items alinha os flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Essa propriedade permite o tão sonhado alinhamento central no eixo vertical, algo que antes só era possível com diferentes hacks.

              align-items: stretch;
              // Valor padrão, ele que faz com que os flex itens cresçam igualmente.
              align-items: flex-start;
              // Alinha os itens ao início.
              align-items: flex-end;
              // Alinha os itens ao final.
              align-items: center;
              // Alinha os itens ao centro.
              align-items: baseline;
              // Alinha os itens de acordo com a linha base da tipografia.
</p>

<hr>
<h2>Align-content</h2>
<p>
Alinha as linhas do container em relação ao eixo vertical. A propriedade só funciona se existir mais de uma linha de flex-itens. Para isso o flex-wrap precisa ser wrap.
<br>
Além disso o efeito dela apenas será visualizado caso o container seja maior que a soma das linhas dos itens. Isso significa que se você não definir height para o container, a propriedade não influencia no layout.

        align-content: stretch;
        // Valor padrão, ele que faz com que os flex itens cresçam igualmente na vertical.
        align-content: flex-start;
        // Alinha todas as linhas de itens ao início.
        align-content: flex-end;
        // Alinha todas as linhas de itens ao final.
        align-content: center;
        // Alinha todas as linhas de itens ao centro.
        align-content: space-between;
        // Cria um espaçamento igual entre as linhas. Mantendo a primeira grudada no topo e a         última no bottom.
        align-content: space-around;
        // Cria um espaçamento entre as linhas. Os espaçamentos do meio são duas vezes maiores que        o top e bottom.
</p>
<hr>
