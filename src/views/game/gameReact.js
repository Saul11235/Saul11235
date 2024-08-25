// game React component

function ReactGame() {
  let cr=React.createElement;
  console.log("Create Game React component");
  let bton=cr("a",{href:"./index.html"},"inicio");
  let txt=cr("div",null,"Espacio para Juego en React");
  return cr("div",null,txt,bton);

}
