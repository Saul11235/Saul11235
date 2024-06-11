function widgetHeader() {
  let mystyle={
    backgroundColor:principalBlue,
    color:"white",
    minHeight:"10vh",
  };
  let link=LJS_makeUrl("","");
  let styleButton={
    color:"white",
    fontSize:"1.2em",
    textDecoration:"none",
    padding:"0px",
    margin:"1px",
  };
  let mainButton=React.createElement("a",{href:link,style:styleButton},
    React.createElement("div",{href:link},
      React.createElement("i", {className:"bi bi-rocket-takeoff"}, ),
      "   Edwin Saul",
    )
  );
  
  //-----------------------------------------

    return (
        React.createElement('header', {classname:"header text-white",style:mystyle},
	  React.createElement("div",{className:"container"},
	    React.createElement("div",{className:"row"},
	      React.createElement("div",{className:"col col-md-6 col-sm-4"},mainButton),
	      React.createElement("div",{className:"col col-md-6 col-sm-8 d-flex justify-content-end"},widgetButtonsheader()),
	    ),
	  ),
        )
    );

  //-----------------------------------------
}


