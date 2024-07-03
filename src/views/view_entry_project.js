
function view_project() {

  let markdown=switchMarkdown("projects/"+LocalJsStorage_args+"/proj0.md","projects/"+LocalJsStorage_args+"/proj1.md");
  let abstractVar=switchTextReact("p",LJS_get("projects/"+LocalJsStorage_args+"/abs0.md"),LJS_get("projects/"+LocalJsStorage_args+"/abs1.md"));
  let titleVar=switchTextReact("h1",LJS_get("projects/"+LocalJsStorage_args+"/tit0"),LJS_get("projects/"+LocalJsStorage_args+"/tit1"));

  // config title
  setTitle(LJS_get("projects/"+LocalJsStorage_args+"/tit0"),LJS_get("projects/"+LocalJsStorage_args+"/tit1"));

  //--------------------------------

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
          br,
          titleVar,
	  abstractVar,
          tag_div("projects/"+LocalJsStorage_args),
          image_div("projects/"+LocalJsStorage_args),
          hr,
	  markdown,
          footer_content("projects/"+LocalJsStorage_args),
	  br,
    );

  //--------------------------------



    return (
        React.createElement('div', null,
	  widgetHeader(),
	  contentPage,
          widgetFooter(),
        )
    );
};


//-------------------------------------------------------------------------

LJS_setMainFuncs("p",()=>{
  if (LJS_exists("projects/"+LocalJsStorage_args)) {
    ReactDOM.render(React.createElement(view_project), document.getElementById('root'));
  } else {
    ReactDOM.render(React.createElement(view_404), document.getElementById('root'));
  };
});


