
//--------------------------------------
// configurando boton para iniciar el juego
//--------------------------------------


function main_game() {
    // return main butoon
    cr=React.createElement;
    let configMain={"id":"game_button","class":"col-12",};
    let lista=[];
    // colocando cohete y suelo
    lista.push(cr("img",{src:"./src/img/game/rocket.svg","class":"cohete_btn"}));
    lista.push(cr("img",{src:"./src/img/game/ground.svg","class":"ground_btn"}));
    // colocando estrellas
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star1"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star2"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star3"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star4"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star5"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star6"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star7"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star8"}));
    lista.push(cr("img",{src:"./src/img/game/star.svg","class":"star9"}));
    return cr("button",configMain,lista);
}

//--------------------------------------
// creando accion para ser usada 
//  para activar juego
//--------------------------------------

function iniciar_ventana_juego() {
  console.log("INICIAR VENTANA JUEGO");
}

//--------------------------------------



