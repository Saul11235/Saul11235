function main_projects() {
    let titleProjetcs=switchTextReact("h2",LJS_get("view_main/projects0"),LJS_get("view_main/projects1"));

    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleProjetcs,
	  br4,
	  widget_carrousel_projects(),
	  br5,
	  mainButton_projects(), //<- defaiult main Button
	  br,
	  br,
        )
    );
};

//===================================================================================================

function widget_carrousel_projects() {
 //-------------------------------
  let projects=getDataForCarrousel();
  let items=[];
  //-----------------------------
  for (let i=0;i<projects.length;i++){
    // creating items for carousel__viewport
    items.push(item_widget_carrousel(projects[i]));
    //-------------------------------------------
  };
  //-----------------------------
  let divCarousel=React.createElement("div",{className:"slider card"},items);
  //-----------------------------
  return divCarousel;
};

//===================================================================================================

function item_widget_carrousel(path){

  let t0=LJS_get(path+"/tit0");
  let t1=LJS_get(path+"/tit1");
  let a0=LJS_get(path+"/abs0.md");
  let a1=LJS_get(path+"/abs1.md");
  let link=createLinkPath(path);
  let image=image_get(path);
  let card=React.createElement("div");
  //-----------------------------
  let styleCard={
    height:"50vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    overflow:"hidden",
    textDecoration:"none",
  };
  let styleOverflow={
    "overflow":"hidden",
    "text-overflow":"ellipsis",
  };
  //
  //-----------------------------
  // card boostrap
  if (image==undefined){
    styleCard.padding="20px"
    card=React.createElement("a",{className:"bg-gradient estiloCard",href:link,style:styleCard},
      React.createElement("h1",{style:styleOverflow},
	React.createElement("i",{className:"bi bi-rocket"}),
	switchTextReact("span",t0,t1)
      ),
      React.createElement("p",{style:styleOverflow},switchTextReact("div",a0,a1)),
      );
  //-----------------------------
  // card boostrap if exists image
  } else {
    let contentText=React.createElement("div",null,switchTextReact("h5",t0,t1), switchTextReact("p",a0,a1),);
    let styleCenter={
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      overflow:"hidden",
      textDecoration:"none",
      "object-fit":"cover",
    };
    let styleImg={
      "object-fit":"cover",
      height:"100%",
    };
    card=React.createElement("a",{className:"card",href:link,style:styleCard},
      React.createElement("div",{className:"card-body col-12 row  bg-gradient estiloCard",style:{padding:10}},
	React.createElement("div",{className:"col-1"}),
	React.createElement("img",{className:"col-6",src:image,width:"100%",style:styleImg}),
	React.createElement("div",{className:"col-4",style:styleCenter},
	  contentText,
	),
      ),
    );
  };
  // ----------------------------
  return card;
  // ----------------------------
};



