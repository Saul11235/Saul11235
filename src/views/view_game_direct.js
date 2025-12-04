console.log("config juego");

LJS_setMainFuncs("game",()=>{
      // ----------------------------
      //  comienza juego desde DOM
      //
         console.log("game direct")
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
});

