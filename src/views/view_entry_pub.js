
function view_entry_pub() {
  console.log("lolo");

  let markdown=switchMarkdown("pubs/"+LocalJsStorage_args+"/pub0.md","pubs/"+LocalJsStorage_args+"/pub1.md");
  let abstractVar=switchTextReact("p",LJS_get("pubs/"+LocalJsStorage_args+"/abs0.md"),LJS_get("pubs/"+LocalJsStorage_args+"/abs1.md"));
  let titleVar=switchTextReact("h1",LJS_get("pubs/"+LocalJsStorage_args+"/tit0"),LJS_get("pubs/"+LocalJsStorage_args+"/tit1"));

  // config title
  setTitle(LJS_get("pubs/"+LocalJsStorage_args+"/tit0"),LJS_get("pubs/"+LocalJsStorage_args+"/tit1"));

  //--------------------------------
    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
          br,
          titleVar,
	  abstractVar,
          tag_div("pubs/"+LocalJsStorage_args),
          image_div("pubs/"+LocalJsStorage_args),
          hr,
	  markdown,
          footer_content("pubs/"+LocalJsStorage_args),
          br,
    );

  //--------------------------------



    return (
        React.createElement('div', null	,
	  widgetHeader(),
	  contentPage,
	  widgetFooter(),
        )
    );
};


//-------------------------------------------------------------------------

LJS_setMainFuncs("pu",()=>{
  if (LJS_exists("pubs/"+LocalJsStorage_args)) {
    ReactDOM.render(React.createElement(view_entry_pub), document.getElementById('root'));
  } else {
    ReactDOM.render(React.createElement(view_404), document.getElementById('root'));
  };

});

