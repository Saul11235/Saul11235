// Renderiza el componente principal en el elemento con id "root" del DOM

LJS_evalMain();
hideSpinner();
BulmaSkins_init();

// activa boton de juego en el main -----
const buttonGame = document.getElementById('game_button');
  if (buttonGame!=null){
    buttonGame.addEventListener('click', function() {
      iniciar_ventana_juego(); 
    });
  };
// ---------------------------------------
