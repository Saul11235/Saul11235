function main_contact() {
    let cr=React.createElement;
    //let titleContact=switchTextReact("h2",LJS_get("view_main/contact0"),LJS_get("view_main/contact1"));
    let styleTile={
      className:"row",
      style:{
	backgroundColor:principalBlue,
	color:"white",
	"border-radius":"30px",
	"margin":"50px",
	"padding":"20px",
	"min-height":"40vh"
      } 
    };
    let styleCol={
      className:"col-sm-12 col-md-6",
      pading:"20px",
      margin:"20px",
    };
    let tile=cr("div",styleTile,
      cr("div",styleCol,1),
      cr("div",styleCol,1),
    );
    return (
        React.createElement('div', null,
	  br,
	  tile,
        )
    );
}


