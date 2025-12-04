// activa boton de juego en el main -----
const buttonGame = document.getElementById('game_button');
  if (buttonGame!=null){
    buttonGame.addEventListener('click', function() {
      iniciar_ventana_juego();  // <--- llama a constructor de juego
    });
  };
// ---------------------------------------
//   activa codigo konami
// --------------------------------------------------
const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
  "b", "a"
];
let konamiIndex = 0;
document.addEventListener('keydown', (e) => {
  const keyEsperada = konamiCode[konamiIndex];
  if (e.key.toLowerCase() === keyEsperada.toLowerCase() || e.code === keyEsperada) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      console.log("CÓDIGO SECRETO ACTIVADO");
      // ----------------------------
      //  comienza juego desde DOM
      //
         let pantalla_elem= document.getElementById('pantalla_color');
         pantalla_elem.classList.add("oscurece_pantalla");
         //--------------
         setTimeout(() => {
         ReactDOM.render(React.createElement(ReactGame), document.getElementById('root'));
         ConfiguraJoystick();
         aclarar_pantalla();
         motor_begin_gameloop();  // <-- ojo se llama a una funcion que configura
         }, 500);
      //
      // ----------------------------
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

