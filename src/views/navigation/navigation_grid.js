
//----------------------------------------

function navigation_grid(array){
  let subElements=[]
  for (let i=0;i<array.length;i++){
    subElements.push(createCardGrid(array[i]))
  };
  return React.createElement("div",{className:"row"},subElements,br);
}

//----------------------------------------

function createCardGrid(path,classNameCol="col-md-4 col-sm-6"){
  let first=LJS_formatPath(path)[0];
  let styleCard={
    height:"300px",
    margin:"10px",
    marginLeft:"-13px",
    textDecoration:"none",
  };
  let link=createLinkPath(path);
  // img for top card
  let heightImg="150px";
  let image=image_get(path);  
  // styles for imgtop - no SVG
     let styleImgContainer={height:heightImg,overflow:"hidden",overflowText:"ellipsis"};
     let styleImgItem={width:"100%","object-fit":"cover"};
  // let styls ifor imgtop - SVG
     let isSVG=false;
     if(image!==undefined){
       if(image.endsWith(".svg")&&!image.endsWith("ZZZ.svg")){isSVG=true};
     };
     if (isSVG){
       styleImgContainer={
          margin:"0px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",position:"relative",
       };
       styleImgItem={
          position:"absolute",maxHeight:"100%",maxWidth:"100%",height:"auto",width:"auto",objectFit:"contain",
       };
     };
  // ------------------   
  let imgTop=React.createElement("div",{className:"card-img-top",style:styleImgContainer},
      React.createElement("img",{src:image,style:styleImgItem}),
  );
  if (image==undefined) {
    if (first=="projects") {
      imgTop=React.createElement("span",{className:"card-img-top row",src:image,style:{backgroundColor:"darkgray",color:"white",padding:"4px",height:heightImg,justifyContent:"center",alignItems:"center",margin:"0 auto",textAlign:"center",}},
         React.createElement("div",{className:"row"},React.createElement("h1",{className:"bi bi-rocket"})));
    } else if (first=="pubs"){
      imgTop=React.createElement("span",{className:"card-img-top row",src:image,style:{backgroundColor:"#f1c59a",color:"white",padding:"4px",height:heightImg,justifyContent:"center",alignItems:"center",margin:"0 auto",textAlign:"center",}},
         React.createElement("div",{className:"row"},React.createElement("h1",{className:"bi bi-book"})));
    } else{
      imgTop=React.createElement("span",{className:"card-img-top row",src:image,style:{backgroundColor:"#9ac0f4",color:"white",padding:"4px",height:heightImg,justifyContent:"center",alignItems:"center",margin:"0 auto",textAlign:"center",}},
         React.createElement("div",{className:"row"},React.createElement("h1",{className:"bi bi-card-text"})));
    };
  };
  //console.log(image);
  // cardbody
  let cardBody =React.createElement("div",{className:"card-body bg-gradient estiloCard",overflow:"hidden",overflowText:"ellipsis"},
    React.createElement("h4",{className:"card-title"},switchTextReact("div",LJS_get(path+"/tit0"),LJS_get(path+"/tit1")) ),
    React.createElement("p",{className:"card-text",style:{overflow:"hidden",overflowText:"ellipsis"}},
      switchTextReact("div",LJS_get(path+"/abs0.md"),LJS_get(path+"/abs1.md"),{style:{overflowText:"ellopsis",overflow:"hidden"}}) ),
    );
  //card
  let card= React.createElement("a",{className:"card",style:styleCard,href:link},
    imgTop,
    cardBody,
  );
  return React.createElement("div",{className:classNameCol},card);
};

//----------------------------------------

function createButtonLinkPath(path){
  let array=LJS_formatPath(path);
  let link="";
  let first=array[0];
  let second=array[1];
  let button={};
  if (first=="projects"){
    link=LJS_makeUrl("p",second);
    button=buttonReact(["view project","ver proyecto",link,"bi bi-rocket"]) ;
  } else if (first=="pubs") {
    link=LJS_makeUrl("pu",second);
    button=buttonReact(["see more","ver más",link,"bi bi-book"]) ;
  } else if (first=="blog") {
    link=LJS_makeUrl("b",second);
    button=buttonReact(["read","leer",link,"bi bi-card-text"]) ;
  }
  return React.createElement("div",null,button);
}

//----------------------------------------


function createLinkPath(path){
  let array=LJS_formatPath(path);
  let link="";
  let first=array[0];
  let second=array[1];
  if (first=="projects"){
    link=LJS_makeUrl("p",second);
  } else if (first=="pubs") {
    link=LJS_makeUrl("pu",second);
  } else if (first=="blog") {
    link=LJS_makeUrl("b",second);
  }
  return link;
}


