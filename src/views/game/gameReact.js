// -------------------------------------------
//
// un juego programado por Edwin Saul
// un juego sencillo de naves,
// es un Easter Egg, pero shhh que es secreto
//
// -------------------------------------------


// game React component
var flag_jugar=false; // true si acepta comandos de jugar
var flag_boton=true;  // true si acepta acciones de boton
var flag_bucle=false; // true si nos encontramos en bucle
var points_now = 0;  // puntos de jugador
var points_top = 0;  // maxima puntuacion
var velocidad_nave = 50;  // velocidad horizontal de nave
var velocidad_stars =50;  // velocidad vertical estrellas
var tiempo_stars = 400;  // tiempo en la que sale una nueva estrella
var boton1_presionado = false  // true si es izquierdo
var boton2_presionado = false  // true si es derecho
var margen_jugabilidad = 4  // este es un margen de recorte en la deteccion de colisiones



//
// ELEMENTO GENERAL 
estiloContenedorJuego ={position:"relative",color: "white",backgroundColor:principalBlue,padding:"0",height:"100vh",width:"100vw", margin:"0",};
estiloContenedorElem = {
  position:"fixed",
  display:"flex",
  zIndex:"9999",
  top:"0",
  left:"0",
  padding:"0",
  margin:"0",
  height:"100vh",
  width:"100vw",
  justifyContent:"center",
  alignItems:"center",   
  //border: '1px solid cyan', // <-- TEST BORDER

};
estiloBotonJoystick   ={padding:"0px",margin:"0",height:"100vh",width:"50vw",cursor:"default",opacity:"0",border:"0", };
estiloPantallaJuego = {
  aspectRatio: "7/8",
  height: "100vh",
  width: "100vw",
  maxHeight: "calc(100vw * 8 / 7)",
  maxWidth: "calc(100vh * 7 / 8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position : 'relative',
  // ----
  margin: "auto",
  backgroundColor: "rgba(0,0,0,0.1)",

 // border: '2px solid white',  // <-- TEST BORDER
};

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
     contenidoPantalla.push(ReactPuntuacion());  // <--- creando widget de puntuacion
     contenidoPantalla.push(ReactPantallaJuego());  // <--- creando widget de pantalla juego

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

// --------------------------------

estiloImagenMenu = {
  width: "100%",
  height: "100%",
  objectFit: "contain",     // <-- clave
  display: "block",
  transition: "opacity 0.6s ease"
};
estiloContenedorMenu = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  //border: '2px solid yellow', // <-- TEST BORDER

};

function ReactIconosMenu(){ // un contenedor de imagenes 
  console.log("creado iconos menu");
  let cr=React.createElement;
  let menuImg=cr("img",{id:"menu1",style:estiloImagenMenu,src:"./src/img/game/menu.svg"});
  return cr("div",{id:"contenedorMenu",style:estiloContenedorMenu},menuImg);
};

// --------------------------------

estiloContenedorPuntuacion= {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  //  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  //
  justifyContent: "center",
  alignItems: "flex-start",

  //aspectRatio: "7/8",
  height: "100vh",
  width: "100vw",
  //maxHeight: "calc(100vw * 8 / 7)",
  // maxWidth: "calc(100vh * 7 / 8)",

  // border: '2px solid magenta',  // <-- TEST BORDER

};

estiloT1 = {
  textAlign: 'center',
  fontSize : ' clamp(1vh, 5vh, 5vh)',
  fontWeight: "bold",
  width : '100%',
  //border: '2px solid yellow', // <-- TEST BORDER
};

estiloT2 = {
  marginTop: 'auto',
  textAlign: 'center',
  fontSize : ' clamp(0.5vh, 3vh, 3vh)',
  width : '100%',
  //border: '2px solid yellow', // <-- TEST BORDER
};



function ReactPuntuacion(){
  console.log("creado barra puntuacion");
  let cr=React.createElement;
  let topTXT=cr("div",{id:"TXT1",style:estiloT1},"0");
  let downTXT=cr("div",{id:"TXT2",style:estiloT2},"top: 0");
  return cr("div",{id:"contenedorMenu",style:estiloContenedorPuntuacion},topTXT,downTXT);
};


estiloWidgetPantallaJuego ={
  height     : "100vh",
  display    : "flex",
  alignItems : "center",
  position   : "absolute",
  overflow   : "hidden",
  //
  justifyContent: "center",
  alignItems: "flex-start",

  aspectRatio: "7/8",
  height: "100vh",
  width: "100vw",
  maxHeight: "calc(100vw * 8 / 7)",
  maxWidth: "calc(100vh * 7 / 8)",

  // border: '2px solid purple',  // <-- TEST BORDER

};

function ReactPantallaJuego(){
  console.log("creado barra pantalla del juego");
  let cr=React.createElement;
  return cr("div",{id:"videogame_screen",style:estiloWidgetPantallaJuego},);
};

//
// CREANDO MINI MOTOR GRAFICO
//
//-------------------------------------


//function motor_crear(idImg,rutaImg,height,posX,posY) { // crea un hijo dentro de un div contenedor
//  console.log("NUEVO ELEM",rutaImg,idImg,height,posX,posY);
//  var padre = document.getElementById("videogame_screen");
//  var hijo = document.createElement("img");
//  hijo.src= rutaImg;
//  hijo.id=idImg;
//  hijo.style.position = "absolute";  
//  hijo.style.height = height+"%"; 
//  hijo.style.left = posX + "%";  
//  hijo.style.top = posY + "%";   
//  padre.appendChild(hijo);
//};


function motor_crear(idImg, rutaImg, height, posX, posY) {  // crea un hijo dentro de un div contenedor
  // Asegurar que el ID sea único
  let nombreFinal = idImg;
  let contador = 1;
  while (motor_existe(nombreFinal)) {
    nombreFinal = idImg + contador;
    contador++;
  }
  console.log("NUEVO ELEM", rutaImg, nombreFinal, height, posX, posY);
  const padre = document.getElementById("videogame_screen");
  const hijo = document.createElement("img");
  hijo.src = rutaImg;
  hijo.id = nombreFinal;
  hijo.style.position = "absolute";  
  hijo.style.height = height + "%"; 
  hijo.style.left = posX + "%";  
  hijo.style.top = posY + "%";   
  padre.appendChild(hijo);
  return nombreFinal; // devuelve el ID final usado
};

function motor_crearCentro(idImg,rutaImg,height,posX,posY){
  idCreado=motor_crear(idImg,rutaImg,height,0,0);
  motor_moverA(idCreado,posX,posY)
};


function motor_existe(idConsultado) {  // consulta si un elemento exite
  try {
    const elem = document.getElementById(idConsultado);
    return !!elem; // true si existe, false si es null
  } catch {
    return false;
  }
}


//function motor_mover(idImg,vectorX,vectorY) {  // mueve un elemento
//  try{
//    const elem_motor = document.getElementById(idImg);
//    const padre = document.getElementById("videogame_screen");
//    if (!elem_motor || !padre) throw "Elemento o contenedor no encontrado";
//    // Convertir posiciones actuales de % a número
//    let top = parseFloat(elem_motor.style.top);
//    let left = parseFloat(elem_motor.style.left);
//    // Actualizar posiciones sumando vectores
//    elem_motor.style.top = (top + vectorY) + "%";
//    elem_motor.style.left = (left + vectorX) + "%";
//  } catch {
//    console.log("ERROR AL MOVER",idImg,vectorX,vectorY);
//  }
//};

function motor_mover(idImg, vectorX, vectorY) {  // mueve un elemento
  try {
    const elem_motor = document.getElementById(idImg);
    const padre = document.getElementById("videogame_screen");
    if (!elem_motor || !padre) throw "Elemento o contenedor no encontrado";
    // Convertir posiciones actuales de % a número
    let top = parseFloat(elem_motor.style.top);
    let left = parseFloat(elem_motor.style.left);
    // Calcular nueva posición
    let newTop = top + vectorY;
    let newLeft = left + vectorX;
    // Verificar si se sale de los límites extendidos
    if (newTop < -5 || newTop > 105 || newLeft < -5 || newLeft > 105) {
      padre.removeChild(elem_motor); // eliminar elemento
      console.log(`Elemento ${idImg} destruido por salir de pantalla`);
      return;
    }
    // Actualizar posiciones
    elem_motor.style.top = newTop + "%";
    elem_motor.style.left = newLeft + "%";
  } catch {
    console.log("ERROR AL MOVER", idImg, vectorX, vectorY);
  }
};

// ----------------

function motor_eliminar(idImg) {
  try {
    const elem = document.getElementById(idImg);
    const padre = document.getElementById("videogame_screen");
    if (!elem || !padre) {
      console.log("motor_eliminar: elemento no encontrado ->", idImg);
      return;
    }
    padre.removeChild(elem);
    console.log("Elemento eliminado:", idImg);
  } catch (e) {
    console.log("ERROR en motor_eliminar:", e);
  }
}


// ----------------

function motor_limitarX(nameId,limiteX1,limiteX2,posY) {
  limites = motor_getLimits(nameId);
  centroX = (limites[0]+limites[1])/2  
  if (centroX<limiteX1){
    motor_moverA(nameId,limiteX1,posY);
  } else if (centroX>limiteX2) {
    motor_moverA(nameId,limiteX2,posY);
  };
};


function motor_getLimits(nameId) {  // devuelve limites elem ID
  try {
    const elem = document.getElementById(nameId);
    const padre = document.getElementById("videogame_screen");
    if (!elem || !padre) throw "Elemento o contenedor no encontrado";
    // Obtener posiciones y tamaño en píxeles
    const elemRect = elem.getBoundingClientRect();
    const padreRect = padre.getBoundingClientRect();
    // Calcular posiciones relativas en %
    const x1 = ((elemRect.left - padreRect.left) / padreRect.width) * 100;
    const x2 = ((elemRect.right - padreRect.left) / padreRect.width) * 100;
    const y1 = ((elemRect.top - padreRect.top) / padreRect.height) * 100;
    const y2 = ((elemRect.bottom - padreRect.top) / padreRect.height) * 100;
    dx = margen_jugabilidad/2 // este es un margen para comodidad jugador
    return [x1+dx, x2-dx, y1+dx, y2-dx];
  } catch {
    return [0, 0, 0, 0];
  }
}

function motor_moverA(idImg,posicionX,posicionY) { // funcion que mueve un elemento a una posicion especifica
  limites = motor_getLimits(idImg);
  deltaX  = posicionX - limites[0] - (limites[1]-limites[0])/2;
  deltaY  = posicionY - limites[2] - (limites[3]-limites[2])/2;
  motor_mover(idImg,deltaX,deltaY);
};


function motor_getElements() {  // funcion que devuelve un array con todos los elementos
  try {
    const padre = document.getElementById("videogame_screen");
    if (!padre) throw "Contenedor no encontrado";
    const hijosConId = [];
    for (let i = 0; i < padre.children.length; i++) {
      const hijo = padre.children[i];
      if (hijo.id && hijo.id !== "") {
        hijosConId.push(hijo.id);
      }
    }
    return hijosConId;
  } catch {
    return [];
  }
}


function motor_colision(id1, id2) { // detecta colision
  if (id1 === id2) return false;
  const limites1 = motor_getLimits(id1);
  const limites2 = motor_getLimits(id2);
  if (limites1.every(v => v === 0) || limites2.every(v => v === 0)) return false;
  const [x1_min, x1_max, y1_min, y1_max] = limites1;
  const [x2_min, x2_max, y2_min, y2_max] = limites2;
  const colisionX = x1_max > x2_min && x1_min < x2_max;
  const colisionY = y1_max > y2_min && y1_min < y2_max;
  return colisionX && colisionY;
}


function motor_limpiar() { // elimina todos los valores
  try {
    const contenedor = document.getElementById("videogame_screen");
    if (!contenedor) throw "Contenedor no encontrado";
    // Elimina todos los hijos
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  } catch (e) {
    console.log("ERROR al limpiar elementos:", e);
  }
};


function motor_mostrar(id) {
    const elem = document.getElementById(id);
    if (elem) elem.style.display = "block"; // o "flex", "inline-block", según tu layout
}

function motor_ocultar(id) {
    const elem = document.getElementById(id);
    if (elem) elem.style.display = "none";
}

// -------------------------

// ---------------------------------
// VARIABLES GLOBALES DEL MOTOR
// ---------------------------------
var animationFrameId; // Para controlar el ID del frame y poder detenerlo
var lastTime = 0;     // Para calcular el tiempo real entre frames

// ---------------------------------
// FUNCIONES DEL MOTOR
// ---------------------------------

function motor_stop_gameloop() { 
  // Funcion que detiene el game loop
  console.log("hemos terminado"); 
  
  // 1. CANCELAR EL FRAME (Importante para evitar que siga en memoria)
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
  }

  motor_mostrar("contenedorMenu");
  motor_ocultar("videogame_screen");
  
  // modificando flags
  flag_jugar=false; 
  flag_boton=true;  
  flag_bucle=false;
}

function motor_deltaT(currentTime) { 
  // Calculamos el tiempo real que pasó desde el último frame
  // Esto hace que el juego vaya igual de rápido en cualquier PC
  if (!lastTime) lastTime = currentTime;
  var delta = (currentTime - lastTime) / 1000; // convertir ms a segundos
  lastTime = currentTime;
  
  // Limite de seguridad (si el navegador se traba, no saltar mucho)
  if (delta > 0.1) delta = 0.1; 
  return delta;
};

function motor_begin_gameloop() { 
  console.log("hemos comenzado"); 
  motor_ocultar("contenedorMenu");
  motor_mostrar("videogame_screen");
  
  motor_limpiar();
  motor_crearCentro("nave", "./src/img/game/rocket.svg",15,50,85);
  puntuacion_nuevo();// <-- coloca puntuacion a 0

  //logicaJuego_new_star(); // NOTA, en este caso es solo una estrella se debe modificar para muchas estrellas cada cierto tiempo

  // configurando flags
  flag_jugar=true; 
  flag_boton=true;  
  flag_bucle=true;
  
  // Reseteamos el tiempo para el nuevo juego
  lastTime = performance.now(); 
  
  // INICIAMOS EL LOOP CORRECTO
  motor_start_gameloop();
}

// ---------------------------------
// LOOP PRINCIPAL CORREGIDO
// ---------------------------------

function motor_start_gameloop() {
  console.log("Game loop iniciado");
  requestAnimationFrame(ciclo_del_motor);
}

// Esta funcion maneja el ciclo (Frame a Frame)
function ciclo_del_motor(currentTime) {
  if (!flag_bucle) return; // Si flag es false, se detiene
  // ejecutar lógica
  motor_gameloop(currentTime);
  animationFrameId = requestAnimationFrame(ciclo_del_motor);
}


function motor_gameloop(currentTime) { 
  // Calculamos delta real basado en el tiempo
  var delta = motor_deltaT(currentTime);
  // moviendo nave  ------  JOYSTICK
  var velocidad_ajustada = velocidad_nave * 2; 
  if ( boton1_presionado && !boton2_presionado ){ // moviendo a la izq
    motor_mover("nave", -delta * velocidad_ajustada, 0); // Corrección: motor_mover pide (id, x, y)
  } else if (    boton2_presionado && !boton1_presionado ){ // moviendo a la der
    motor_mover("nave", delta * velocidad_ajustada, 0);
  };
  motor_limitarX("nave",10,90,85); // <-- limitar nave
  // moviendo estrellas --- LOGICA JUEGO
  var vstar = logicaJuego_velocidadEstrellas();
  const arr = logicaJuego_estrellas();
  for (let i = 0; i < arr.length; i++) {
    estrella = arr[i];  // estrella de iteracion
    if (motor_colision("nave",estrella)) {
      flag_jugar=false;
      flag_boton=false;
      flag_bucle=false;
      setTimeout(() => {
        motor_stop_gameloop(); // <-- termina ciclo
      }, 100);
    } else {
      motor_mover(estrella,0,delta*vstar);
      logicaJuego_is_goal(estrella);
    };
  }
  //-----------------
  // timer
  logicaJuego_timer();
  //-----------------
}

// -----------------
//  METODOS DE LOGICA DE JUEGO
//   ------------
//
function logicaJuego_new_star() { // crea una estrella aleatoria
  console.log("nueva estrella creada")
  let xx = Math.floor(Math.random() * (95 - 5 + 1)) + 5;
  motor_crearCentro("star", "./src/img/game/star.svg",5,xx,10);
};

// .------

function logicaJuego_is_goal(nameId){ //evalua si un str es goal
  limites = motor_getLimits(nameId);
  yfinal  = limites[3];
  ygoal   = 99
  if (yfinal > ygoal){
    puntuacion_calificar(5); // aumenta 5 puntos
    motor_eliminar(nameId);
    return true;
  } else {return false};
}

// .------
//
function logicaJuego_velocidadEstrellas() {
  // velocidad que varia con la dificultad
  return  velocidad_stars+points_now/5
};

// .------

function logicaJuego_estrellas() {
    return motor_getElements().filter(item => item !== "nave");
}

// .------

var timer = 0; 
// .------

function logicaJuego_timer() {
  var time_now = performance.now();
  if (time_now > timer){
    var randomT = Math.floor(Math.random() * 21) - 10;
    var plazo = tiempo_stars+randomT;
    timer = plazo+time_now;
    logicaJuego_new_star();
  };
};

// -------------------------
//
// CONFIGURANDO FUNCIONES DE PUNTUACION
//
//-------------------------------------

function puntuacion_nuevo(){ // funcion que configura puntuacion de juego nuevo
  points_now = 0;
  points_top = Math.max(points_top,puntuacion_getCookie());  // llama a valores de la cookie
  document.getElementById("TXT1").textContent = points_now;
  document.getElementById("TXT2").textContent = "top: "+points_top;
};

function puntuacion_calificar(puntos) { // funcion que aumenta puntaje
  points_now += puntos; 
  if (points_now>points_top) { points_top = points_now};
  document.getElementById("TXT1").textContent = points_now;
  document.getElementById("TXT2").textContent = "top: "+points_top;
  puntuacion_setCookie(points_top);
};



function puntuacion_setCookie(val) {
  // Guarda "val" en una cookie llamada "puntuacionES" durante 1 año
  const dias = 365;
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
  const expira = "expires=" + fecha.toUTCString();
  document.cookie = "puntuacionES=" + encodeURIComponent(val) + ";" + expira + ";path=/";
  console.log("Cookie guardada:", val);
}


function puntuacion_getCookie() {
  // Lee la cookie "puntuacionES"
  const nombre = "puntuacionES=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const partes = decodedCookie.split(";");
  for (let parte of partes) {
    parte = parte.trim();
    if (parte.indexOf(nombre) === 0) {
      const valor = parte.substring(nombre.length, parte.length);
      const num = Number(valor);
      return isNaN(num) ? 0 : num;
    }
  }
  return 0; // En caso de no existir o error
}



//
// CONFIGURANDO ACCIONES DEL JOYSTICK
//
//----------------------------------
function joy1_ON(){  //presiona boton 1
  if (flag_boton && flag_jugar )  {
    // moviendo nave a la izquierda
    boton1_presionado = true;
    //hay_boton_presionado=true;
    //direccion_boton = true;
  } else if(flag_boton && !flag_jugar){
    motor_begin_gameloop(); // empieza

  };
  //-------------------------
};
//----------------------------------
function joy1_OFF(){ //suelta boton 1
  boton1_presionado = false;

};
//---------------------------------- 
function joy2_ON(){ //presiona boton 2
  if (flag_boton && flag_jugar )  {
    // moviendo nave a la derecha
    boton2_presionado = true;
    //hay_boton_presionado=true;
    //direccion_boton = false
  } else if(flag_boton && !flag_jugar){
    menu_toIndex();
  };
};
//----------------------------------
function joy2_OFF(){ // suelta boton 2
  boton2_presionado = false;
};
//----------------------------------
//
// CONFIGURANDO ACCIONES DEL JUEGO
//
//----------------------------------
function menu_toIndex(){
  console.log("go to index");
  window.location.href = "./index.html";
};
//----------------------------------
function menu_again(){
  motor_begin_gameloop();
};
// ---------------------------------
//
// CONECTANDO ELEMENTOS DEL JOYSTICK
//

function ConfiguraJoystick() {
    
    // Función auxiliar para asignar eventos de Mouse y Touch
    const asignarEventos = (idElem, funcionOn, funcionOff) => {
        const boton = document.getElementById(idElem);
        
        // --- MOUSE (PC) ---
        boton.addEventListener("mousedown", function(e) {
            e.preventDefault(); // Evita selecciones raras
            funcionOn();
        });
        boton.addEventListener("mouseup", function(e) {
            e.preventDefault();
            funcionOff();
        });
        // Si el mouse sale del botón mientras se presiona, debe detenerse
        boton.addEventListener("mouseleave", function(e) {
            funcionOff();
        });

        // --- TOUCH (MOVIL) ---
        boton.addEventListener("touchstart", function(e) {
            e.preventDefault(); // IMPORTANTE: Evita scroll, zoom y emulación de mouse
            funcionOn();
        }, { passive: false });

        boton.addEventListener("touchend", function(e) {
            e.preventDefault();
            funcionOff();
        }, { passive: false });
    };

    // Asignar a los botones
    asignarEventos("Btn1", joy1_ON, joy1_OFF);
    asignarEventos("Btn2", joy2_ON, joy2_OFF);

    // --- TECLADO (PC) ---
    document.addEventListener("keydown", (event) => {
        if (event.repeat) return;
        switch (event.key) {
            case "a": case "A": case "ArrowLeft":
                joy1_ON();
                break;
            case "d": case "D": case "ArrowRight":
                joy2_ON();
                break;
        }
    });

    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "a": case "A": case "ArrowLeft":
                joy1_OFF();
                break;
            case "d": case "D": case "ArrowRight":
                joy2_OFF();
                break;
        }
    });
};
