<h1 align="center">grid</h1>

<div style="font-size:18px;">
<a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Grid trick</a> <br>
<a href="https://www.w3schools.com/css/css_grid.asp">Grid w3 school</a>

<p>Grid são grades onde se tem que configurar as linhas ou colunas</p>

<p>Para adicionar columas utilizo:</p>
<li>grid-template-columns onde recebe tamanho da coluna</li>
<p>exemplo:</p>
<li>grid-template-columns: 50% 50% </li>
<p> posso utiliza rem ou px em vez de % no tamanho da grid </p>
<p>para resolver utilizamos de preferencia as unidades :</p>
<li>1fr(fragmento) equivale  </li>
<P> posso adiciona espaçamento com gap: 30px</P>

<h3>Exemplo fixar no meio</h3>

        grid{
          max-width:1200px;
          margin:0 auto;
          display:grid;
          grid-template-columns: 1fr 1fr 1fr;
          <!-- caso queira criar varias colunas utilizo -->
          grid-template-columns: repeat(10, 1fr 2fr)
          grid-template-columns: repeat(autofill, minmax(320px 1fr))
          grid-template-columns: repeat(10, 1fr 2fr)
          gap:30px;
        }

        assim ficara no meio da page

<p>grid-template-rows são as linhas</p>
<p>grid-template-rows: 2fr 1fr</p>

<h3>grid area:</h3>
<p>posso dar nome para area e literalmente utilizar:</p>

                grid{
                  display:grid;
                  grid-template-rows: 50px 1fr 50px ;
                  grid-template-columns:200px 1fr;
                  grid-template-areas:
                   'header header',
                   'nav main',
                   'nav footer'
                }

                utilizando grid-area:
                  .grid div:nth-child(1){
                    grid-area: header;
                  }
                  .grid div:nth-child(2){
                    grid-area: nav;
                  }
                  .grid div:nth-child(3){
                    grid-area: content;
                  }
                  .grid div:nth-child(4){
                    grid-area: footer;
                  }
<p>utilizando grid com mediaquery</p>

                    @media (max-width:768px){
                      grid{
                        display:grid;
                        grid-template-rows: auto ;
                        grid-template-columns:auto;
                        grid-template-areas:
                         'header',
                         'main',
                         'nav ',
                         'footer'
                      }
                    }

</div>