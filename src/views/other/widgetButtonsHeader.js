function widgetButtonsheader() {

  let containerStyle={
    padding:"5px",
    paddingTop:"24px",
  };
  let buttonStyle={
    all:"unset",
    margin:"5px",
    marginLeft:"5px",
    marginRight:"5px",
    padding:"5px",
    paddingLeft:"8px",
    paddingRight:"8px",
    border:"1px solid darkgray",
    borderRadius:"5px",
    cursor:"pointer",
    fontSize:"1.0em",
  };
  let spaceicon={
    paddingRight:"10px",
  };
  let styleiconL={
  };
  let styleiconD={
    display:"none",
  };
 
    return (
        React.createElement('div', {classname:"header text-white",style:containerStyle},

	  //---- firtst button ----
	  React.createElement("button",{id:"switch-text-button",style:buttonStyle},
	    React.createElement("i", {className:"bi bi-globe",style:spaceicon}, ),
             switchTextReact("span","ENG","ESP"),
	  ),
	  //---- second button ----
	  React.createElement("button",{id:"BulmaSkins-switch",style:buttonStyle},

	    React.createElement("i", {className:"bi bi-sun-fill",style:styleiconL, id:"BulmaSkins-switch-light"}, ),
	    React.createElement("i", {className:"bi bi-moon-fill",style:styleiconD,id:"BulmaSkins-switch-dark"}, ),
	  ),
	  //-----------------------
        )
    );
}


