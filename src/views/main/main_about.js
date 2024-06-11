
function main_about() {

 let titleAbout=switchTextReact("h2",LJS_get("view_main/about0"),LJS_get("view_main/about1"));
 let morelinks=switchTextReact("p",LJS_get("view_main/mylinks0"),LJS_get("view_main/mylinks1"));
 let links=[] 
 let dataLinks=LJS_get("view_main/mylinks");
  let markdown=switchMarkdown("view_main/textAbout0.md","view_main/textAbout1.md");

 for (let i=0;i<dataLinks.length;i++){
   links.push(buttonReact(dataLinks[i]));
 };
  let row=React.createElement("div",{className:"row align-items-center"},
    React.createElement("div",{className:"col-sm-12 col-md-8 col-lg-9"},markdown),
    React.createElement("div",{className:"col-sm-12 col-md-4 col-lg-3"},
      React.createElement("img",{className:"img-fluid img-responsive rounded-circle mx-auto d-block avatar-picture",src:"https://avatars.githubusercontent.com/u/24817629"}),
    ),
  );

    //React.createElement("h1",{},LJS_get("main/header0"));

    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleAbout,
	  row,
	  morelinks,
	  links,
	  br,
	  br,
        )
    );
}


