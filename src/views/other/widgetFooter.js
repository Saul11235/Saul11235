function getArrayElementFooter(array){
  if (array[0]!=="a"){
    return switchTextReact(array[0],array[1],array[2]);
  } else {
    let l1="";let l2="";let icon=""; let link=""
    try {
      l1=array[1];l2=array[2];link=array[3];icon=array[4];
    } catch {};
    return buttonReact([l1,l2,link,icon]);
  };
};


function getArrayFooter(path){
  let initialList=[];
  let arrayinitial=(LJS_get(path));
  for(let i=0;i<arrayinitial.length;i++){
    initialList.push(getArrayElementFooter(arrayinitial[i]));
  }
  return initialList;
}

//-------------------------------------------------------------------

function widgetFooter() {
  let mystyle={
    backgroundColor:principalBlue,
    minHeight:"40vh",
  };
  let footer1=getArrayFooter("view_header_footer/footer1");
  let footer2=getArrayFooter("view_header_footer/footer2");
  let footer3=getArrayFooter("view_header_footer/footer3");
    return (
        React.createElement('footer', {className:"footer text-white",style:mystyle},

	  React.createElement("div",{className:"container"},
	    React.createElement("br",null),
	      br,
	    React.createElement("div",{className:"row"},
	      React.createElement("div",{className:"col-md-4"},footer1,br,br),
	      React.createElement("div",{className:"col-md-4"},footer2,br,br),
	      React.createElement("div",{className:"col-md-4"},footer3,br,br),
	    ),
	    React.createElement("div",{className:"text-center"},
	      React.createElement("div",null,buttonReact(["by Edwin Saul","hecho por Edwin Saul",LJS_makeUrl("",""),"bi bi-rocket-takeoff"])),
	    ),
	    br,
	  )

       )
    );
}


