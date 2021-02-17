            /*=====INICIAR=====*/
  
  //iniciar musica e game
    $("section.inicio button").on("click", function(){
      //tocar música
      musica = new Audio ('musica/musica1.mp3');
      musica.play();

      //transição de tela
      $("section").hide();
      $("section.jogo1").show();

      //iniciar contador de tempo
      setInterval(function(){
      var tempo = parseInt($("span.tempo1").text());
      var somaTempo = tempo + 1;
      if(somaTempo<10) {
        somaTempo = "0"+somaTempo;
      }
        //tempo excedido
      if(somaTempo>50) {
        musica.pause();
        $("section").hide();
        $("section.tempo").show();
      }
      $("span.tempo1").text(somaTempo);
      }, 1000);
  });

            /*=====CONTADORES=====*/
  
  //contador de acertos
    $("section.jogo1 ul img.certo").one("click", function(){
      var acertos = parseInt($("span.acertos").text());
      var somaAcertos = acertos + 1;
      $("span.acertos").text(somaAcertos);
      $(this).css({opacity: 0.4});

      if (somaAcertos = 1) {
        musica.load("")
        musica = new Audio ('musica/musica2.mp3');
        musica.play();
        $("section").hide();
        $("section.jogo2").show();

        //iniciar contador de tempo
        setInterval(function(){
        tempo = parseInt($("span.tempo2").text());
        somaTempo = tempo + 1;
        if(somaTempo<10) {
          somaTempo = "0"+somaTempo;
        }
        $("span.tempo2").text(somaTempo);
        }, 1000);
      }
  });

  


  //contador de erros
    var erros = 0;
    $("section.jogo1 ul img.errado").one("click", function(){
      erros ++;
      $(this).css({opacity: 0.4});

      //game over
      if (erros>1) {
        musica.load("")
        musica = new Audio ('musica/game-over-acarde.wav');
        musica.play();
        $("section").hide();
        $("section.perdeu").show();
      }
    });


    //contador de acertos 2ª parte
    $("section.jogo2 ul img.certo").one("click", function(){
      var acertos2 = parseInt($("span.acertos2").text());
      var soma2 = acertos2 + 1;
      $("span.acertos2").text(soma2);
      $(this).css({opacity: 0.4});

      if (soma2 = 2) {
        musica.load("")
        musica = new Audio ('musica/musica3.mp3');
        musica.play();
        $("section").hide();
        $("section.jogo3").show();

        setInterval(function(){
          tempo = parseInt($("span.tempo3").text());
          somaTempo = tempo + 1;
          if(somaTempo<10) {
            somaTempo = "0"+somaTempo;
          }
          $("span.tempo3").text(somaTempo);
          }, 1000);
      }
  });

  //contador de erros 2ª parte
    var erros = 0;
    $("section.jogo2 ul img.errado").one("click", function(){
      erros ++;
      $(this).css({opacity: 0.4});

      if (erros>2) {
        musica.load("")
        musica = new Audio ('musica/game-over-acarde.wav');
        musica.play();
        $("section").hide();
        $("section.perdeu").show();
      }
    

      //game over
      if (erros>2) {
        musica.load("")
        musica = new Audio ('musica/game-over-acarde.wav');
        musica.play();
        $("section").hide();
        $("section.perdeu").show();
      }
    });


    //contador de acertos 3ª parte
    $("section.jogo3 ul img.certo").one("click", function(){
      var acertos3 = parseInt($("span.acertos3").text());
      var soma3 = acertos3 + 1;
      $("span.acertos3").text(soma3);
      $(this).css({opacity: 0.4});

      if (soma3 = 3) {
        musica.load("")
        musica = new Audio ('musica/musica5.mp3' );
        musica.play();
        $("section").hide();
        $("section.jogo4").show();

        setInterval(function(){
          tempo = parseInt($("span.tempo4").text());
          somaTempo = tempo + 1;
          if(somaTempo<10) {
            somaTempo = "0"+somaTempo;
          }
          $("span.tempo4").text(somaTempo);
          }, 1000);
      }
  });

  //contador de erros 3ª parte
    var erros = 0;
    $("section.jogo3 ul img.errado").one("click", function(){
      erros ++;
      $(this).css({opacity: 0.4});

      if (erros>2) {
        musica.load("")
        musica = new Audio ('musica/game-over-acarde.wav');
        musica.play();
        $("section").hide();
        $("section.perdeu").show();
      }
    

      //game over
      if (erros>2) {
        musica.load("")
        musica = new Audio ('musica/game-over-acarde.wav');
        musica.play();
        $("section").hide();
        $("section.perdeu").show();
      }
    });


    //contador de acertos 4ª parte
    $("section.jogo4 ul img.certo").one("click", function(){
      var acertos4 = parseInt($("span.acertos4").text());
      var soma4 = acertos4 + 1;
      $("span.acertos4").text(soma4);
      $(this).css({opacity: 0.4});

      if (soma4 >= 6) {
        musica.load("")
        musica = new Audio ( 'musica/win.wav' );
        musica.play();
        $("section").hide();
        $("section.vitoria").show();

        setInterval(function(){
          tempo = parseInt($("span.tempo4").text());
          somaTempo = tempo + 1;
          if(somaTempo<10) {
            somaTempo = "0"+somaTempo;
          }
          $("span.tempo4").text(somaTempo);
          }, 1000);
      }
  });


  //contador de erros 4ª parte
  var erros = 0;
  $("section.jogo4 ul img.errado").one("click", function(){
    erros ++;
    $(this).css({opacity: 0.4});

    if (erros=1) {
      musica.load("")
      musica = new Audio ('musica/game-over-acarde.wav');
      musica.play();
      $("section").hide();
      $("section.perdeu").show();
    }
  

    //game over
    if (erros = 1) {
      musica.load("")
      musica = new Audio ('musica/game-over-acarde.wav');
      musica.play();
      $("section").hide();
      $("section.perdeu").show();
    }
  });

            /*=====TRANSIÇÕES=====*/
  
  //tela de derrota --> inicio
    $("section.perdeu button").on("click", function(){
      $("section").hide();
      $("section.inicio").show();
      window.location.reload();
    });

  //tela de vitoria --> inicio
    $("section.vitoria button").on("click", function(){
      $("section").hide();
      $("section.inicio").show();
      window.location.reload();
    });

  //tela de tempo excedido --> inicio
    $("section.tempo button").on("click", function(){
      $("section").hide();
      $("section.inicio").show();
      window.location.reload();
    });

            /*=====BOTÕES=====*/

  //home
    $("section.jogo1 span.home").on("click", function(){
      $("section").hide();
      $("section.inicio").show();
      window.location.reload();
    });

  //dica
    $("section.jogo1 span.dica").on("click", function(){
      $("section.jogo1 ul img.errado#2").hide();
      $("section.jogo1 ul img.errado#5").hide();
    });

  //home 2
    $("section.jogo2 span.home").on("click", function(){
      $("section").hide();
      $("section.inicio").show();
      window.location.reload();
    });


    //home 3
    $("section.jogo3 span.home").on("click", function(){
      $("section").hide();
      $("section.inicio").show();
      window.location.reload();
    });

 //home 4
 $("section.jogo4 span.home").on("click", function(){
  $("section").hide();
  $("section.inicio").show();
  window.location.reload();
});
