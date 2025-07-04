// game React component
//
// Estilos
estiloContenedorJuego ={color: "white",backgroundColor:principalBlue,padding:"0",height:"100vh",width:"100vw", margin:"0",};
estiloBotonJoystick   ={padding:"0px",margin:"0",height:"100vh",width:"50vw",cursor:"default",opacity:"0",border:"0", };
estiloJoystick        ={position:"fixed","top":"0",left:"0",padding:"0",margin:"0",height:"100vh",width:"100vw",};


  
// Juego ...............................
//

// --------------------------------------------------

function ReactGame() {
  let cr=React.createElement;
  console.log("Create Game React component");
  //let bton=cr("a",{href:"./index.html"},"inicio");
  //let txt=cr("div",null,"Espacio para Juego en React");

  let btn1=cr("button",{id:"Btn1",style:estiloBotonJoystick},"<");
  let btn2=cr("button",{id:"Btn2",style:estiloBotonJoystick},">");
  let joystick=cr("div",null,btn1,btn2)

  //let joystick=cr("div",null)



  return cr("div",{style:estiloContenedorJuego},joystick);

  //return cr("div",{style:estiloContenedorJuego},txt,bton,joystick);
}


// configurando JOystick para juego
function joy1_ON(){
      console.log("presionado-- 1");
};
function joy1_OFF(){
      console.log("suelto-- 1");
};
function joy2_ON(){
      console.log("presionado-- 2");
};
function joy2_OFF(){
      console.log("suelto-- 2");
};



// ---------------------------------
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
