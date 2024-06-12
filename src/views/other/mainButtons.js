// main buttons

function mainButton_main(){
  let URL=LJS_makeUrl("","");
  return buttonReact(["Return to main","Regresar al inicio",URL,"bi bi-box"]);
}

function mainButton_404(){
  let URL=LJS_makeUrl("404","");
  return buttonReact(["go to 404 page","ir a la pagina 404",URL,"bi bi-box"]);
}

function mainButton_projects(){
  let URL=LJS_makeUrl("projects","");
  return buttonReact(["go to projects page","ver todos los proyectos",URL,"bi bi-rocket"]);
}

function mainButton_skills(){
  let URL=LJS_makeUrl("skills","");
  return buttonReact(["view all skills","ver todas las habilidades",URL,"bi bi-hammer"]);
}

function mainButton_pubs(){
  let URL=LJS_makeUrl("pub","");
  return buttonReact(["view all publications","ver todas las publicaciones",URL,"bi bi-book"]);
}

function mainButton_blog(){
  let URL=LJS_makeUrl("blog","");
  return buttonReact(["go to blogs page","ver todas las entradas de blogs",URL,"bi bi-box"]);
}

function mainButton_allTags(){
  let URL=LJS_makeUrl("ss","");
  return buttonReact(["view all tags","ver todas las etiquetas",URL,"bi bi-tag-fill"]);
}

function mainButton_allContent(){
  let URL=LJS_makeUrl("s","");
  return buttonReact(["view all","ver todo",URL,"bi bi-box"]);
}




