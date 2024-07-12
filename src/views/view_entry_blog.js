
function view_blog() {

  let markdown=switchMarkdown("blog/"+LocalJsStorage_args+"/blog0.md","blog/"+LocalJsStorage_args+"/blog1.md");
  let abstractVar=switchTextReact("p",LJS_get("blog/"+LocalJsStorage_args+"/abs0.md"),LJS_get("blog/"+LocalJsStorage_args+"/abs1.md"));
  let titleVar=switchTextReact("h1",LJS_get("blog/"+LocalJsStorage_args+"/tit0"),LJS_get("blog/"+LocalJsStorage_args+"/tit1"));

  // config title
  setTitle(LJS_get("blog/"+LocalJsStorage_args+"/tit0"),LJS_get("blog/"+LocalJsStorage_args+"/tit1"));

  //--------------------------------

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
          br,
          titleVar,
	  abstractVar,
          tag_div("blog/"+LocalJsStorage_args),
          image_div("blog/"+LocalJsStorage_args),
          hr,
	  markdown,
          footer_content("blog/"+LocalJsStorage_args),
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

LJS_setMainFuncs("b",()=>{
  if (LJS_exists("blog/"+LocalJsStorage_args) && LocalJsStorage_args!="__json__") {
    ReactDOM.render(React.createElement(view_blog), document.getElementById('root'));
  } else {
    ReactDOM.render(React.createElement(view_404), document.getElementById('root'));
  };
});

