function main_pubs() {

    let titleBlog=switchTextReact("h2",LJS_get("view_main/pubs0"),LJS_get("view_main/pubs1"));
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleBlog,
	  br4,
          widget_carrousel_pubs(),
	  br6,
	  mainButton_pubs(),
	  br,
	  br,
        )
    );
}


//===================================================================================================

function widget_carrousel_pubs() {
 //-------------------------------
  let projects=getDataForPubs();
  let items=[];
  //-----------------------------
  for (let i=0;i<projects.length;i++){
    items.push(item_widget_carrousel_pubs(projects[i]));
  };
  //-----------------------------
  let divCarousel=React.createElement("div",{className:"row"},items);
  //-----------------------------
  return divCarousel;
};

//===================================================================================================

function item_widget_carrousel_pubs(path){

  let t0=LJS_get(path+"/tit0");
  let t1=LJS_get(path+"/tit1");
  let a0=LJS_get(path+"/abs0.md");
  let a1=LJS_get(path+"/abs1.md");
  let link=createLinkPath(path);
  let image=image_get(path);
  let card=React.createElement("div");
  //-----------------------------
  let styleCard={
    height:"25vh",
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
    card=React.createElement("a",{className:"card bg-dark bg-gradient text-white",href:link,style:styleCard},
      React.createElement("h4",{style:styleOverflow},
	React.createElement("i",{className:"bi bi-book"}),
	switchTextReact("span",t0,t1)
      ),
      React.createElement("p",{style:styleOverflow},switchTextReact("div",a0,a1)),
      );
  //-----------------------------
  // card boostrap if exists image
  } else {
    let contentText=React.createElement("div",null,switchTextReact("h4",t0,t1), switchTextReact("p",a0,a1),);
    let styleCenter={
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      overflow:"hidden",
      textDecoration:"none",
      "object-fit":"cover",
    };
    let styleImg={
      padding:0,
      "object-fit":"cover",
    };
    card=React.createElement("a",{className:"card",href:link,style:styleCard},
      React.createElement("div",{className:"card-body col-12 row bg-white bg-gradient text-black",style:{padding:0}},
	React.createElement("img",{className:"col-8 ",src:image,style:styleImg}),
	React.createElement("div",{className:"col-4 ",style:styleCenter},
	  contentText,
	),
      ),
    );
  };
  //
  // ----------------------------
  return React.createElement("div",{href:link,className:"col-sm-6"},card);
};



