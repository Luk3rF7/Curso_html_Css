<h1> medidas </h1>

<h2>medidas Absolute não sao baseada em nada </h2>
<div style="font-size:18px">
<li>pixel</li>
<li>cm</li>
<li>mm</li>

</div>
<h2>medidas relativas  </h2>
<div style="font-size:18px">
<li>rem -> ele e baseado no root do documento </li>
          <!-- exemplo  -->
          <html > <!-- "font-size:20px;" -->
                  <p>
                    esse paragrafo contera 20px de font 
                    utilizando font-size:1rem;
                  </p>
          </html>

<li>em -> ele faz com que elemento se comporte ao elemento pai </li>
        
            <!--  exemplo: -->
          <div class="pai"> <!--  aqui tem font-size:50px; -->
              <p> <!--  com simple 1em e equivalente 50px -->
                 esse aqui herda em do pai
              </p>
          </div>
<li>maneira de utilizar o rem e em:</li>

<html>   
  <!-- font-size:62.5% -->
          agora meu 1rem passa a ser 10px
</html>

<h2> ViewPort - vw e vh</h2>
<li>vw viewidth - tera % do viewPort</li>
<li>vh viewHeight - tera % do viewPort</li>
<li>vmin - minimo de viewport</li>
<li>vman - maximo  de viewport</li>
<li></li>
<li> a % ela e referente ao elemento pai </li>
<li>scroll-behavior:smooth faz com que rode suavemente</li>
  

</div>