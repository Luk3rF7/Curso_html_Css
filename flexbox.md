<h1>Flex Box </h1>

<h2> Nomenclatura do Flexbox</h2>

<div  style="font-size:18px;">

  <h4> Flex container e container onde dentro tem varias caixa flex</h4>
  <ul>
    <li>main axis - eixo principal </li>
    <li>cross axis - eixo que corta  </li>
  </ul>
</div>
  

<h2>Display em flex box</h2>

<div style="font-size:18px;">
  <ul>
    <li>Primeiro display: flex</li>
  <p>estou dizendo que essa classe e tipo flex-box</p>

  <h3>Propriedade flex-direct </h3>
  <hr>

  <p> Flex -> direction</p>
  <li>columns -> forma de coluna</li>
  <li>row -> forma de linhas</li>
  <li> columns/row -reverse => reverte a forma que foi colocado </li>

  <p>Podemo quebrar a linha  utilizando: flex-wrap</p>
  <li>wrap -> vai quebrar a linha  apartir da largura do container ou flex item </li>
  <li>wrap-reverse => onde se primeira linha contem 7 e na segunda 3,inverte a ordem </li>
 
  <p>flex-flow: </p>
  <li>row wrap => mantendo linha </li>
  <li>column-reverse wrap => ele via passar como coluna ao contrario e vai quebra em varias colunas </li>

  <h3>justify-content </h3>
  <p>justificar elemento ou conteudo </p>
  <hr>
  <li>flex-start -> inicio do main axis</li>
  <li>flex-end -> final do cross axis</li>
  <li>center -> centralizar</li>
  <li>space-around -> espaços entre elemento onde ficara distribuida</li>
  <li>spcae-between -> deixa espaçemento maior entre elementos</li>
  <p> Cross axis </p>
  <li>align-items:baseline -> alinha pela base das fonts</li>
  <li>align-items:flex-start -> alinha emcima  ou no inicio da flex</li>
  <li>align-items:flex-end -> alinha no final dos item na flex</li>
  <li>align-items:center -> vai centralizar </li>

  <p>align-content quando se tem mais de uma linha</p>
  <li>align-content:flex-start -> todas linha vao para o inicio</li>
  <li>align-content:flex-end -> toda linha vao  para o final flex</li>
  <li>align-content:center ->ele vai centralizar </li>

  <li>Order determina ordem do elemento </p>
  <li>align-self -> alinha um determinado elemento</p>
  <li>flex-grow definir a logica de como vai definir espaço q ta faltando</p>

<li>flex-basis e a propriedade sobre qual largura do flex container</li>
</div>