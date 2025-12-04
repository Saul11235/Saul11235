// activa boton de juego en el main -----
const buttonGame = document.getElementById('game_button');
  if (buttonGame!=null){
    buttonGame.addEventListener('click', function() {
      iniciar_ventana_juego();  // <--- llama a constructor de juego
    });
  };
// ---------------------------------------
