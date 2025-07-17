// game React component
var flag_jugar=false; // true si acepta comandos de jugar
var flag_boton=true;  // true si acepta acciones de boton



//
// ELEMENTO GENERAL 
estiloContenedorJuego ={position:"relative",color: "white",backgroundColor:principalBlue,padding:"0",height:"100vh",width:"100vw", margin:"0",};
estiloContenedorElem  ={position:"fixed",display:"flex",zIndex:"9999","top":"0",left:"0",padding:"0",margin:"0",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"};
estiloBotonJoystick   ={padding:"0px",margin:"0",height:"100vh",width:"50vw",cursor:"default",opacity:"0",border:"0", };
estiloPantallaJuego   ={aspectRatio:"7/8",height:"100vh",width:"100vw",maxHeight:"calc(100vw*8/7)",maxWidth:"calc(100vh*7/8)",backgroundColor:"rgba(0,0,0,0.1)"};

// --------------------------------------------------
//  Estructura de componentes
//  div -estiloContenedorJuego
//      contenedor-pantalla div -estiloContenedorElem
//          pantalaJuego -div -estiloPantallaJuego (se mantiene al centro con proporcion 7/8)
//            *aqui colocaremos otros elementos para mostrar al jug*
//      contenedor-Joystick div -estiloContenedorElem
//          btn1 button  
//          btn2 button  
//
// --------------------------------------------------

function ReactGame() { // Modulo que crea 
  let cr=React.createElement;

  // crea contenedores de elementos html de juego
  let contenidoPantalla=[];
     // colocando elementos dentro del widget
     contenidoPantalla.push(ReactIconosMenu());  // <--- creando widget de iconos

  //----- elementos widget pantalla
  let pantallaJuego=cr("div",{id:"PantallaJuego",style:estiloPantallaJuego},contenidoPantalla);
  let contenedorPantalla=cr("div",{id:"contenedor-pantalla",style:estiloContenedorElem},pantallaJuego);


  // Crea elementos del Joystick
  let btn1=cr("button",{id:"Btn1",style:estiloBotonJoystick},"<");
  let btn2=cr("button",{id:"Btn2",style:estiloBotonJoystick},">");
  let contenedorJoystick=cr("div",{id:"contenedor-joystick",style:estiloContenedorElem},btn1,btn2)

 // devuelve contenedor para toda la pantalla
  return cr("div",{style:estiloContenedorJuego},contenedorPantalla,contenedorJoystick);
};

estiloImagenMenu     = {width:"100vw",maxWidth:"calc(100vh*7/8)",opacity:"1"};
estiloContenedorMenu = {height:"100vh",display:"flex",alignItems:"center",};

function ReactIconosMenu(){
  console.log("creado");
  let cr=React.createElement;
  let menuImg=cr("img",{id:"menu1",style:estiloImagenMenu,src:"./src/img/game/menu.svg"});
  return cr("div",{id:"contenedorMenu",style:estiloContenedorMenu},menuImg);
};



//
// CONFIGURANDO ACCIONES DEL JOYSTICK
//
//----------------------------------
function joy1_ON(){  //presiona boton 1
  if (flag_boton && flag_jugar )  {

  } else if(flag_boton && !flag_jugar){
  };
};
//----------------------------------
function joy1_OFF(){ //suelta boton 1
      console.log("suelto-- 1");
};
//---------------------------------- 
function joy2_ON(){ //presiona boton 2
  if (flag_boton && flag_jugar )  {

  } else if(flag_boton && !flag_jugar){

    menu_toIndex();
  };
};
//----------------------------------
function joy2_OFF(){ // suelta boton 2
      console.log("suelto-- 2");
};
//----------------------------------
//
// CONFIGURANDO ACCIONES DEL JUEGO
//
//----------------------------------
function game_Left(){
};
//----------------------------------
function game_Rigth(){
};
//----------------------------------
function menu_toIndex(){
  console.log("go to index");
  window.location.href = "./index.html";
};
//----------------------------------
function menu_again(){
};
// ---------------------------------
//
// CONECTANDO ELEMENTOS DEL JOYSTICK
//
function ConfiguraJoystick() {
const boton1 = document.getElementById("Btn1");
    boton1.addEventListener("mousedown", function() {
      joy1_ON();
    });
    boton1.addEventListener("mouseup", function() {
      joy1_OFF();
    });
const boton2 = document.getElementById("Btn2");
    boton2.addEventListener("mousedown", function() {
      joy2_ON();
    });
    boton2.addEventListener("mouseup", function() {
      joy2_OFF();
    });
  document.addEventListener("keydown", (event) => {
    if (event.repeat) return; // evita múltiples disparos si se mantiene la tecla
    switch (event.key) {
      case "a":
      case "A":
      case "ArrowLeft":
        joy1_ON();
        break;
      case "d":
      case "D":
      case "ArrowRight":
        joy2_ON();
        break;
    }
  });
  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "a":
      case "A":
      case "ArrowLeft":
        joy1_OFF();
        break;
      case "d":
      case "D":
      case "ArrowRight":
        joy2_OFF();
        break;
    }
  });
};
