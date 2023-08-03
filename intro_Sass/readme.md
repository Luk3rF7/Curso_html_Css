<h1 align="center"> Respositorio intro de Sass </h1>

<li> podemos utilizar Scss assim 

      body{
              background: greenyellow;

              h1{ 
                color: black;
              }
            }
<li> podemos usar variaveis no Sass  utilizando $ :

      $primary-color:blue;

          body{
            background: rgb(87, 247, 87);

            h1{ 
              color:$primary-color;
            }
            a{
              color:$primary-color;
            }
          }

<li>Existe tbm  o maps sintaxe $font-weight:(aqui voce coloca chaves e os valores ) 
  a gente utiliza map para determinar certo valores exemplo 
  </li>     

          $font-weght:(
            "regular":400,
            "medium":500,
            "bold":700
          )
              body{
            background: rgb(87, 247, 87);

            h1{ 
              color:$primary-color;
              font-weight: map-get( $font-weight , bold )
            }
            a{
              color:$primary-color;
            }
          }

<li>Codigo partial ,onde separamos scss em outros arquivos utilizando _ no começo
 exemplo crio arquivo sass para guarda minha variaveis _variable 
 ai onde posso utilizar meu @import e importa para determindo arquivo
 </li>
<li>Existem tbm funções no Sass @function </li>

              @function weight ($key) {
               @return map-get($font-weight ,$key);
              }

<li>Existem tbm funções no Sass @mixim quando queremos repetir a msm coisa
e a gente usa includes para adiciona como exemplo : </li>

                            @mixin flexCenter {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          }
                          <!-- posso tbm utilzar params -->
                            @mixin flexCenter(@direction) {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction? $direction;
                          }

                          body{
                            background:rgb(87, 247, 87);
                            .container {
                              @include flexCenter()
                            }
                          }

<li> existe helpen lighten e darken() são funcões onde vai clarear ou escurecer

                          body{
                            background:lighten(#000, 25%);
                            color:darken(#fff , 25%);
                          }

<p style="font-size:18px;"> em pseudo classe utilizamos &:hover,active,nth-child etc
onde posso tbm utilizar para referenciar classe exemplo : &.class