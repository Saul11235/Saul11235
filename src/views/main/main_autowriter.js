// Hero  autowriter JS

function main_autowriter() {

  let texts=LJS_get("view_main/header");
  let subchilds=[];
  for (let i=0;i<texts.length;i++){
    let item=texts[i];
    if ( item.length==2 ) {
      subchilds.push(switchTextReact("li",item[0],item[1]));
    };
  }

  let autowriterOutput_style={
    margin:"10px",
    justifyContent: "center",
    alignItems: "center",
    "top":"50%",
    "left":"50%",
    display:"inline-block",
    "text-align":"center",
  };

  
  let autowriterOutput =React.createElement("h1",{id:"autowriter-output",className:"card-title",style:autowriterOutput_style},LJS_get("view_main/header0"))

  let autowriterInput=React.createElement("ul",{id:"autowriter-input",style:{display:"none"}},subchilds);

  let autowriterStyle={
      color:"white",
      backgroundColor: principalBlue,
      minHeight:"50vh",
      overflow:"hidden",
      borderRadius: 0,
    };

   
  let styleCardHeader={
     margin:"0px",
     marginTop:"-20px",
     borderWidth:0,
     textAlign:"right",
     backgroundColor:"rgba(0,0,0,0)",
     position:"relative",
     "top":0,
     "right":0,
  };

  //-----------------------
  let buttonTop=React.createElement("div",{className:"align-items-right",style:styleCardHeader},
            widgetButtonsheader(),
	  );
  //------------------------
  let styleSquareArea={
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
  };
  //-----------------------
  let areaSquare=React.createElement("div",{className:"area has-text-centered",style:styleSquareArea},
	    autowriterOutput,
            autowriterInput,
	    React.createElement("ul",{className:"circles"},
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	      React.createElement("li"),
	    )
	  );
  //-----------------------


    return (
        React.createElement('div', {className:"card",style:autowriterStyle},
	  areaSquare,
          buttonTop,
        )
    );
}




